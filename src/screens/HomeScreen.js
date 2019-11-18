import React from "react";
import { useAuth } from "../config/auth";
import { StyleSheet, View, ScrollView } from "react-native";
import firebase from "../config/firebase";
import colors from "../constants/Colors";
import Hero from "../components/Hero";
import MenuButton from "../components/MenuButton";
import LogoutButton from "../components/LogoutButton";

const HomeScreen = props => {
  const { navigation } = props;

  const { authUser } = useAuth();

  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <View style={styles.container}>
      {authUser ? (
        <View style={styles.container}>
          <Hero />
          {/* main menu */}
          <ScrollView style={styles.scrollcontainer}>
            <MenuButton
              text="Skapa en rutin"
              onPress={() => {
                navigation.navigate("CreateRoutineScreen");
              }}
            />
            <MenuButton
              text="Mina sparade rutiner"
              onPress={() => {
                navigation.navigate("SavedRoutinesScreen");
              }}
            />
            <MenuButton
              text="Mitt konto"
              onPress={() => {
                navigation.navigate("SettingScreen");
              }}
            />
          </ScrollView>
          <LogoutButton text="Logga ut" onPress={() => logout()} />
        </View>
      ) : (
        navigation.navigate("LogInScreen")
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.lightWhite
  },
  scrollcontainer: {
    marginTop: "2rem",
    marginBottom: "2rem"
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: colors.button,
    borderRadius: 0,
    width: 200
  },
  buttonText: {
    color: colors.lightWhite
  },
  welcomeImage: {
    width: 400,
    height: 200,
    position: "relative"
  },
  text: {
    color: colors.black,
    fontFamily: "Raleway-Regular",
    fontSize: 24
  }
});

export default HomeScreen;
