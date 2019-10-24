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
import CustomText from "../components/CustomText";

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
        <ImageBackground
          style={styles.welcomeImage}
          source={require("../.././assets/images/black.jpg")}
        >
          <CustomText type="extra-bold">
            <Text style={styles.welcometext}>
              Mina{"\n"}rutiner{"\n"}i vardagen
            </Text>
          </CustomText>
        </ImageBackground>
        <Text style={styles.text}>Hi {email}!</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("SignUpScreen")}
        >
          <CustomText type="extra-bold">
            <Text style={styles.buttonText}>Tillbaka</Text>
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("CreateActivityScreen")}
        >
          <CustomText type="extra-bold">
            <Text style={styles.buttonText}>Skapa aktiviter</Text>
          </CustomText>
        </TouchableOpacity>
        {/* To the createroutinescreen */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("CreateRoutineScreen")}
        >
          <CustomText type="extra-bold">
            <Text style={styles.buttonText}>Skapa rutiner</Text>
          </CustomText>
        </TouchableOpacity>

        <Button title="Logga ut" onPress={this.handleSignout} />
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
