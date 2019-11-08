import React, { useState } from "react";
// import app from "../config/firebase";
import { useAuth } from "../config/auth";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import colors from "../constants/Colors";
import AddRoutine from "../components/AddRoutine";
import HomeButton from "../components/HomeButton";

import Title from "../components/Title";
// var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

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
      <HomeButton
        text="Hem"
        onPress={() => navigation.navigate("HomeScreen")}
      ></HomeButton>
      {authUser ? (
        <View style={styles.container}>
          <Title title={"Skapa en\nny rutin"} text="Min nya rutin" />
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
    height: height,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: colors.lightWhite
  }
});

export default CreateRoutineScreen;
