import React, { useState, useEffect } from "react";
import app from "../config/firebase";
import { useAuth } from "../config/auth";
import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import HomeButton from "../components/HomeButton";
import GotoButton from "../components/GotoButton";
import colors from "../constants/Colors";
import font from "../constants/Fonts";

const SavedRoutineScreen = props => {
  const { navigation } = props;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <View style={styles.routineCard} key={item.id}>
              <Text key={item.id} style={styles.routineCardText}>
                {item.name}
              </Text>
              <GotoButton
                text={"Gå till"}
                onPress={() =>
                  navigation.navigate("DisplayRoutineScreen", {
                    name: item.name,
                    addedByUserUid: authUser.uid,
                    keyId: item.id
                  })
                }
              ></GotoButton>
            </View>
          ))}
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
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },

  routineCard: {
    marginTop: "2rem",
    width: "343px",
    height: "100px",
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
    letterSpacing: "0.05em"
  }
});
export default SavedRoutineScreen;
