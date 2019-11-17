import React, { useState } from "react";
import { useAuth } from "../config/auth";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/Colors";
import font from "../constants/Fonts";

import AddRoutine from "../components/AddRoutine";
import HomeButton from "../components/HomeButton";
import Title from "../components/Title";

const CreateRoutineScreen = props => {
  const { navigation } = props;
  const [routine, setRoutine] = useState([]);

  // Get user if logged in
  const { authUser } = useAuth();

  const addNewRoutine = object => {
    setRoutine([...routine, object]);
  };

  return (
    <View style={styles.container}>
      <HomeButton
        text="Hem"
        onPress={() => navigation.navigate("HomeScreen")}
      ></HomeButton>
      <Title title={"Skapa en ny rutin"} />
      {authUser ? (
        <View style={styles.container}>
          <Text style={styles.text}>Steg 1 av 2</Text>
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
    alignItems: "center"
  },
  text: {
    color: colors.black,
    marginTop: "2rem",
    marginBottom: "2rem",
    fontSize: "1.5rem",
    letterSpacing: "0.05em",
    fontFamily: font.main
  }
});

export default CreateRoutineScreen;
