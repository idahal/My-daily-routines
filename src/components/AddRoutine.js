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

  // const resetForm = () => {
  //   setRoutineName("");
  // };

  const isInvalid = routineName === "";

  const addNewRoutine = async e => {
    e.preventDefault();

    if (authUser) {
      // Add data to firebase:
      db.collection("routines")

        .add({
          name: routineName,
          addedByUserUid: authUser.uid
        })
        .then(function(docRef) {
          console.log(docRef.id);
          console.log({ routineName });
          console.log(authUser);

          navigation.navigate("CreateActivityScreen", {
            name: routineName,
            addedByUserUid: authUser.uid,
            keyId: docRef.id
          });

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
        placeholder="Här skriver du namnet"
        value={routineName}
        onChange={e => setRoutineName(e.target.value)}
      />

      <MainButton text="Spara" onPress={addNewRoutine} disabled={isInvalid} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%"
  },
  textInput: {
    height: 50,
    width: 230,
    borderColor: colors.black,
    borderWidth: 1,
    marginTop: "1rem",
    fontFamily: font.main,
    paddingLeft: 5,
    marginLeft: "1rem",
    color: colors.dark,
    fontStyle: "italic"
  },
  text: {
    color: colors.black,
    marginTop: "2rem",
    fontSize: "1rem",
    marginLeft: "1rem",
    letterSpacing: "0.05em",
    fontFamily: font.main
  }
});

export default AddRoutine;
