import React, { useState } from "react";
import app from "../config/firebase";
import { useAuth } from "../config/auth";
import { StyleSheet, Text, View, TextInput } from "react-native";
import colors from "../constants/Colors";
import font from "../constants/Fonts";
import MainButton from "./MainButton";

const AddActivity = props => {
  const db = app.firestore();

  const [activityName, setActivityName] = useState("");
  const [minutes, setMinutes] = useState("");

  const number = parseInt(minutes);

  // Get users auth
  const { authUser } = useAuth();

  const resetForm = () => {
    setActivityName("");
    setMinutes("");
  };

  const isInvalid = activityName === "" || minutes === "";

  const addNewActivity = async e => {
    e.preventDefault();

    if (authUser) {
      const createdAt = new Date();
      // Write data to firebase:
      db.collection("routines")
        .doc(props.collectionId)
        .collection("activity")
        .doc()
        .set({
          name: activityName,
          description: number,
          addedByUserUid: authUser.uid,
          date: createdAt
        })
        .then(function() {
          resetForm();
          props.displayNewActivity({
            name: activityName,
            description: number,
            id: activityName
          });
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Namn på rutinen:</Text>
      <TextInput
        style={styles.textInput}
        type="text"
        name="activityName"
        id="activityName"
        placeholder="Skriv namn på aktiviteten"
        value={activityName}
        onChange={e => setActivityName(e.target.value)}
      />
      <Text style={styles.text}>Hur lång tid tar aktiviteten att göra:</Text>
      <TextInput
        style={styles.textInput}
        type="text"
        name="minutes"
        id="minutes"
        placeholder="Skriv antal minuter"
        keyboardType={"numeric"} // This prop help to open numeric keyboard
        value={minutes}
        onChange={e => setMinutes(e.target.value)}
      />
      <MainButton text="Spara" onPress={addNewActivity} disabled={isInvalid} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    width: "100%"
  },
  textInput: {
    height: 50,
    width: 230,
    borderColor: colors.black,
    borderWidth: 0.5,
    borderStyle: "solid",
    outlineColor: colors.dark,
    marginTop: "1rem",
    marginLeft: "2rem",
    fontFamily: font.main,
    paddingLeft: 5,
    color: colors.dark,
    fontStyle: "italic"
  },
  text: {
    color: colors.black,
    marginTop: "2rem",
    marginLeft: "2rem",
    fontSize: "1rem",
    letterSpacing: "0.05em",
    fontFamily: font.main
  }
});

export default AddActivity;
