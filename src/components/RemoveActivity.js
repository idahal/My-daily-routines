import React from "react";
import app from "../config/firebase";
import { View, TouchableOpacity } from "react-native";
import Xmark from "../icons/Xmark";

const RemoveActivity = props => {
  const db = app.firestore();
  const itemId = props.id;
  const collectionId = props.collectionId;

  const activityRef = db
    .collection("routines")
    .doc(collectionId)
    .collection("activity")
    .doc(itemId);
  const remove = () => activityRef.delete();

  return (
    <View>
      <TouchableOpacity onPress={remove}>
        <Xmark></Xmark>
      </TouchableOpacity>
    </View>
  );
};

export default RemoveActivity;
