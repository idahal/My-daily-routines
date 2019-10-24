import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { firestore } from "../.././config/Firebase";

const Routine = ({ id, content, hours, minutes }) => {
  const Ref = firestore.doc(`routines/${id}`);
  const remove = () => Ref.delete();

  return (
    <View style={styles.routine}>
      <Text>{content}</Text>
      <Text>{hours}</Text>
      <Text>{minutes}</Text>
      <Button title="delete" onClick={remove}>
        X
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  routine: {
    flex: 1,
    justifyContent: "flex-start",
    height: 150,
    alignItems: "center",
    backgroundColor: "green"
  }
});

export default Routine;
