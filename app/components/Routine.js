import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { firestore } from "../.././config/Firebase";

const Routine = ({ id, content, hours, minutes }) => {
  const Ref = firestore.doc(`routines/${id}`);
  const remove = () => Ref.delete();

  return (
    <View style={styles.routine}>
      <Text>{content}</Text>
      <Text>
        {hours}:{minutes}
      </Text>
      <Button title="Ta bort" onPress={remove}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  routine: {
    backgroundColor: "green"
  }
});

export default Routine;
