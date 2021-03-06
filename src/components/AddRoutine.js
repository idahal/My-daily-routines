import React, { useState } from "react";
import app from "../config/firebase";
import { useAuth } from "../config/auth";
import { StyleSheet, Text, View, TextInput } from "react-native";
import colors from "../constants/Colors";
import font from "../constants/Fonts";
import MainButton from "./MainButton";

const AddRoutine = props => {
  const { navigation } = props;

  const db = app.firestore();
  const [routineName, setRoutineName] = useState("");

  // Get user if logged in
  const { authUser } = useAuth();

  const isInvalid = routineName === "";

  const addNewRoutine = async e => {
    e.preventDefault();

    if (authUser) {
      // Add data to firebase
      db.collection("routines")
        .add({
          name: routineName,
          addedByUserUid: authUser.uid
        })
        .then(function(docRef) {
          navigation.navigate("CreateActivityScreen", {
            name: routineName,
            addedByUserUid: authUser.uid,
            keyId: docRef.id
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
        name="routineName"
        id="routineName"
        placeholder="Här skriver du namnet"
        value={routineName}
        maxLength={25}
        onChange={e => setRoutineName(e.target.value)}
      />

      <MainButton
        text="Gå vidare"
        onPress={addNewRoutine}
        disabled={isInvalid}
      />
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
    outlineColor: colors.dark,
    borderWidth: 0.5,
    borderStyle: "solid",
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

export default AddRoutine;
