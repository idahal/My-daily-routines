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
        placeholder="Namn"
        value={routineName}
        onChange={e => setRoutineName(e.target.value)}
      />

      <MainButton text="Spara" onPress={addNewRoutine} />
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
