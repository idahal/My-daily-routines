import React, { useState } from "react";
import app from "../config/firebase";
import { useAuth } from "../config/auth";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Xmark from "../icons/Xmark";

// import colors from "../constants/Colors";
// import font from "../constants/Fonts";
// import MainButton from "./MainButton";

const RemoveActivity = props => {
  const db = app.firestore();

  const itemId = props.id;
  const collectionId = props.collectionId;
  console.log(itemId);
  // Get users auth
  const { authUser } = useAuth();

  const activityRef = db
    .collection("routines")
    .doc(collectionId)
    .collection("activity")
    .doc(itemId);
  const remove = () => activityRef.delete();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={remove}>
        <Xmark></Xmark>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: "flex-end",
    // width: "100%"
  }
});

export default RemoveActivity;
