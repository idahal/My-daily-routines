import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { firestore } from "../.././config/Firebase";

const Activity = ({ id, content, number }) => {
  const Ref = firestore.doc(`activities/${id}`);
  const remove = () => Ref.delete();

  return (
    <View style={styles.activity}>
      <Text>{content}</Text>
      <Text>{number}</Text>
      <Button title="delete" onClick={remove}>
        X
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  activity: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "pink"
  }
});

export default Activity;
