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
import { firestore } from "../.././config/Firebase";
import TimePicker from "react-native-simple-time-picker";
import colors from "../constants/Colors";
import CustomText from "../components/CustomText";
import AddRoutine from "../components/AddRoutine";
import Title from ".././components/Title";

const CreateRoutineScreen = () => {
  return (
    <View>
      <Title title={"Skapa en\nny rutin"} text="Välj namn och tid" />
      <AddRoutine />
    </View>
  );
};

export default CreateRoutineScreen;
