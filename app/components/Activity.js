import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { firestore } from "../../config/firebase";

const Activity = ({ id, content, number }) => {
  const Ref = firestore.doc(`activities/${id}`);
  const remove = () => Ref.delete();

  return (
    <View style={styles.activity}>
      <Text>{content}</Text>
      <Text>{number}</Text>
      <Button title="delete" onClick={remove}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  activity: {
    height: 50,
    backgroundColor: "pink"
  }
});

export default Activity;
