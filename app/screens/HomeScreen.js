import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  ImageBackground
} from "react-native";
import firebase, { firestore } from "../.././config/Firebase";
import { auth } from "../.././config/Firebase";
import colors from "../constants/Colors";
import Hero from "../components/Hero";
import MenuButton from "../components/MenuButton";
import LogoutButton from "../components/LogoutButton";

class HomeScreen extends React.Component {
  get uid() {
    return auth.currentUser.uid;
  }

  get userRef() {
    return firestore.doc(`users/${this.uid}`);
  }
  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate("LogInScreen"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
    const email = auth.currentUser.uid;
    return (
      <View style={styles.container}>
        <Hero />
        <Text style={styles.text}>Hi {email}!</Text>

        {/* main menu */}
        <MenuButton
          text="Skapa en aktivitet"
          onPress={() => {
            this.props.navigation.navigate("CreateActivityScreen");
          }}
        />
        <MenuButton
          text="Skapa en rutin"
          onPress={() => {
            this.props.navigation.navigate("CreateRoutineScreen");
          }}
        />
        <MenuButton
          text="Mina sparade rutiner"
          onPress={() => {
            this.props.navigation.navigate("SavedRoutinesScreen");
          }}
        />

        <LogoutButton text="Logga ut" onPress={this.handleSignout} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.lightWhite
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
  welcometext: {
    color: colors.lightWhite,
    position: "absolute", // child
    top: 60, // position where you want
    left: 80,
    fontSize: 24
  }
});
export default HomeScreen;
