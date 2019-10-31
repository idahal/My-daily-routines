import React, { useState, useEffect } from "react";
import app from "../../config/firebase";
import { useAuth } from "../../config/auth";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput
} from "react-native";

import TimePicker from "react-native-simple-time-picker";
import colors from "../constants/Colors";
import AddRoutine from "../components/AddRoutine";
import Title from ".././components/Title";

const CreateRoutineScreen = props => {
  const { navigation } = props;

  // const db = app.firestore();
  const [routine, setRoutine] = useState([]);

  // Get user if logged in
  const { authUser } = useAuth();

  // useEffect(() => {
  //   const tempArray = [];

  //   db.collection("Routines")
  //     .get()
  //     .then(querySnapshot => {
  //       querySnapshot.forEach(doc => {
  //         tempArray.push({ id: doc.id, ...doc.data() });
  //       });
  //       setRoutine(tempArray);
  //     });
  // }, []);

  const addNewRoutine = object => {
    setRoutine([...routine, object]);
  };

  return (
    <View>
      <Button
        title="Hem"
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      ></Button>
      {authUser ? (
        <View style={styles.container}>
          <Title title={"Skapa en\nny rutin"} text="Välj namn och tid" />
          <AddRoutine addNewRoutine={addNewRoutine} />
        </View>
      ) : (
        <Text>Du är inte inloggad</Text>
      )}
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
