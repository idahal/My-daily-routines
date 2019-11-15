import React, { useState } from "react";
import firebase from "../config/firebase";
import { useAuth } from "../config/auth";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/Colors";
import font from "../constants/Fonts";

import AddRoutine from "../components/AddRoutine";
import HomeButton from "../components/HomeButton";
// import LogoutButton from "../components/LogoutButton";

import Title from "../components/Title";
// var width = Dimensions.get("window").width; //full width
// var height = Dimensions.get("window").height; //full height

const CreateRoutineScreen = props => {
  const { navigation } = props;

  // const logout = () => {
  //   firebase.auth().signOut();
  // };

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
          {/* <LogoutButton text="Logga ut" onPress={() => logout()} /> */}
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
