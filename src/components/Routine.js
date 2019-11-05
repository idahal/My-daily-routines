import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { firestore } from "../config/firebase";
import colors from "../constants/Colors";
import font from "../constants/Fonts";

const Routine = ({ id, content, hours, minutes }) => {
  const Ref = firestore.doc(`routines/${id}`);
  const remove = () => Ref.delete();

  return (
    <View style={styles.routine}>
      <View>
        <Text style={styles.infotext}>{content}</Text>
        <Text style={styles.infotext}>
          {hours}:{minutes}
        </Text>
      </View>
      <Text>Rutinen tar 40 minuter att genomföra.</Text>
      {/* <Button title="Ta bort" onPress={remove}></Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  routine: {
    backgroundColor: colors.lightWhite,
    borderWidth: 1,
    borderColor: colors.dark,
    width: 343,
    height: 100,
    marginTop: 16
  },
  infotext: {
    fontFamily: font.extrabold,
    fontSize: 18
  }
});

export default Routine;
