import React, { useState, useEffect } from "react";
import app from "../config/firebase";
import firebase from "../config/firebase";
import { useAuth } from "../config/auth";
import { Button, StyleSheet, Text, View, Dimensions } from "react-native";
import colors from "../constants/Colors";
import font from "../constants/Fonts";
import HomeButton from "../components/HomeButton";
import LogoutButton from "../components/LogoutButton";
import AddActivity from "../components/AddActivity";
import Title from "../components/Title";
// var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const CreateActivityScreen = props => {
  const { navigation } = props;

  const logout = () => {
    firebase.auth().signOut();
  };

  const db = app.firestore();
  const [activity, setActivity] = useState([]);

  // Get user if logged in
  const { authUser } = useAuth();
  console.log(navigation.getParam("name"));

  //Get params from addRoutine
  const docName = navigation.getParam("name");
  const userId = navigation.getParam("addedByUserUid");
  const collectionId = navigation.getParam("keyId");

  useEffect(() => {
    const tempArray = [];
    db.collection("routines")
      .doc(collectionId)
      .collection("activity")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          tempArray.push({ id: doc.id, ...doc.data() });
        });
        setActivity(tempArray);
      });
  }, [db]);

  const displayNewActivity = object => {
    setActivity([...activity, object]);
  };

  return (
    <View style={styles.container}>
      <HomeButton
        title="Hem"
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      ></HomeButton>
      <Title title={"Skapa en ny rutin"} />
      <View>
        <Text>{docName}</Text>
        {activity.map(item => (
          <View key={item.id}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        ))}
      </View>
      {authUser ? (
        <View style={styles.container}>
          <Text style={styles.text}>Steg 2 av 2</Text>

          <AddActivity
            docName={docName}
            userId={userId}
            collectionId={collectionId}
            displayNewActivity={displayNewActivity}
          />
          <Button
            title="Gå vidare"
            onPress={() =>
              navigation.navigate("DisplayRoutineScreen", {
                name: docName,
                addedByUserUid: authUser.uid,
                keyId: collectionId
              })
            }
          ></Button>
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
  text: {
    color: colors.black,
    marginTop: "2rem",
    marginBottom: "2rem",
    fontSize: "1.5rem",
    letterSpacing: "0.05em",
    fontFamily: font.main
  }
});
export default CreateActivityScreen;
