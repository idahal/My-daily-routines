import React, { useState } from "react";
import app from "../config/firebase";
import { useAuth } from "../config/auth";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import colors from "../constants/Colors";

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
      // Write data to firebase:
      db.collection("routines")
        .doc(props.collectionId)
        .collection("activity")
        .doc()
        .set({
          name: activityName,
          description: number,
          addedByUserUid: authUser.uid
        })
        .then(function() {
          console.log(activityName);
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
      <Text>Min aktiviteter</Text>
      <TextInput
        style={styles.textInput}
        type="text"
        name="activityName"
        id="activityName"
        placeholder="Namn"
        value={activityName}
        onChange={e => setActivityName(e.target.value)}
      />
      <TextInput
        style={styles.textInput}
        type="text"
        name="minutes"
        id="minutes"
        placeholder="Antal minuter"
        keyboardType={"numeric"} // This prop help to open numeric keyboard
        value={minutes}
        onChange={e => setMinutes(e.target.value)}
      />
      <Button
        title="Spara"
        onPress={addNewActivity}
        disabled={isInvalid}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.lightWhite
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: colors.button,
    borderRadius: 0,
    width: 200
  },
  buttonText: {
    color: colors.lightWhite
  },

  textInput: {
    height: 40,
    width: 350,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 3
  }
});

export default AddActivity;
