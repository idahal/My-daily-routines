import React, { useState, useEffect } from "react";
import firebase from "../config/firebase";
import app from "../config/firebase";
import { useAuth } from "../config/auth";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Title from "../components/Title";
import HomeButton from "../components/HomeButton";
import LogoutButton from "../components/LogoutButton";
import colors from "../constants/Colors";
import font from "../constants/Fonts";

const SavedRoutineScreen = props => {
  const { navigation } = props;

  const logout = () => {
    firebase.auth().signOut();
    navigation.navigate("LogInScreen");
  };

  const db = app.firestore();
  const [routine, setRoutine] = useState([]);

  // Get user if logged in
  const { authUser } = useAuth();

  useEffect(() => {
    const tempArray = [];
    if (authUser) {
      db.collection("routines")
        .where("addedByUserUid", "==", authUser.uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            tempArray.push({ id: doc.id, ...doc.data() });
          });
          setRoutine(tempArray);
        });
    }
  }, [db]);

  return (
    <View style={styles.container}>
      <HomeButton
        text="Hem"
        onPress={() => navigation.navigate("HomeScreen")}
      ></HomeButton>
      <Title title={"Mina sparade rutiner"} />
      {authUser ? (
        <View style={styles.listContainer}>
          {routine.map(item => (
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate("DisplayRoutineScreen", {
                  name: item.name,
                  addedByUserUid: authUser.uid,
                  keyId: item.id
                })
              }
            >
              <View style={styles.routineCard} key={item.id}>
                <Text key={item.id} style={styles.routineCardText}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
          <LogoutButton text="Logga ut" onPress={() => logout()} />
        </View>
      ) : (
        <Text>Du är inte inloggad</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  listContainer: {
    alignItems: "center"
  },
  button: {
    marginTop: 20
  },
  routineCard: {
    width: "343px",
    height: "50px",
    borderColor: colors.dark,
    borderWidth: "1px",
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    alignItems: "center",
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    marginBottom: "1rem"
  },
  routineCardText: {
    fontFamily: font.main,
    fontWeight: "800",
    color: colors.dark,
    fontSize: "1.2rem",
    letterSpacing: "0.05em",
    textTransform: "capitalize"
  }
});
export default SavedRoutineScreen;
