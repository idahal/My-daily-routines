import React, { useState } from "react";
import app from "../config/firebase";
import { useAuth } from "../config/auth";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput
} from "react-native";
import colors from "../constants/Colors";
import font from "../constants/Fonts";
import MainButton from "./MainButton";

const AddRoutine = () => {
  // const { navigation } = props;

  const db = app.firestore();
  const [routineName, setRoutineName] = useState("");
  // const [time, setTime] = useState("");
  // const [selectedHours, setSelectedHours] = useState("");
  // const [selectedMinutes, setSelectedMinutes] = useState("");

  // Get user if logged in
  const { authUser } = useAuth();

  // const resetForm = () => {
  //   setRoutineName("");
  //   setTime("");
  //   setSelectedHours("");
  //   setSelectedMinutes("");
  // };

  const isInvalid = routineName === "";

  const addNewRoutine = async e => {
    // e.preventDefault();

    if (authUser) {
      // Add data to firebase:
      db.collection("routines")
        .doc()
        .set({
          name: routineName,
          // description: time,
          addedByUserUid: authUser.uid
        })
        .then(function() {
          console.log("Yes, it worked!");
          // navigation.navigate("AddActivityScreen", {
          //   name: routineName,
          //   addedByUserUid: authUser.uid
          // });

          // resetForm();
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
        name="routineName"
        id="routineName"
        placeholder="Namn"
        value={routineName}
        onChange={e => setRoutineName(e.target.value)}
      />
      <Text style={styles.text}>Vilken tid på klockan ska du vara klar:</Text>

      {/* <Input
        style={styles.textInput}
        id="time"
        placeholder="00:00"
        type="time"
        value={time}
        onChange={e => setTime(e.target.value)}
      /> */}
      {/* <TimePicker
          selectedHours={selectedHours}
          selectedMinutes={selectedMinutes}
          value={(selectedHours, selectedMinutes)}
          onChange={e => setSelectedHours(e.target.value)}
        /> */}

      <MainButton text="Spara" onPress={addNewRoutine} disabled={isInvalid} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginLeft: 16
  },
  textInput: {
    height: 40,
    width: 230,
    borderColor: colors.black,
    borderWidth: 1,
    marginTop: 16,
    fontFamily: font.italic,
    paddingLeft: 5,
    color: colors.dark
  },
  timeInput: {
    height: 40,
    width: 150,
    marginTop: 16,
    fontFamily: font.italic
  },
  text: {
    color: colors.black,
    marginTop: 16,
    fontSize: 16,
    fontFamily: font.regular
  }
});

export default AddRoutine;
