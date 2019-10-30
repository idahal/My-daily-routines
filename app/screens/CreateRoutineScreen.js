import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
  Text
} from "react-native";
import { firestore } from "../../config/firebase";
import TimePicker from "react-native-simple-time-picker";
import colors from "../constants/Colors";
import CustomText from "../components/CustomText";
import AddRoutine from "../components/AddRoutine";
import Title from ".././components/Title";

const CreateRoutineScreen = () => {
  return (
    <View style={styles.container}>
      <Title title={"Skapa en\nny rutin"} text="Välj namn och tid" />
      <AddRoutine />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: colors.lightWhite
  }
});

export default CreateRoutineScreen;
