import React, { useState } from "react";
// import app from "../config/firebase";
import { useAuth } from "../config/auth";
import { Button, StyleSheet, Text, View } from "react-native";

import colors from "../constants/Colors";
import AddRoutine from "../components/AddRoutine";
import Title from "../components/Title";
import MainButton from "../components/MainButton";

const CreateRoutineScreen = props => {
  const { navigation } = props;

  // const db = app.firestore();
  const [routine, setRoutine] = useState([]);

  // Get user if logged in
  const { authUser } = useAuth();

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
          <AddRoutine addNewRoutine={addNewRoutine} navigation={navigation} />
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
