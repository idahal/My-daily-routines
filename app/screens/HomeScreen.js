import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button
} from "react-native";
import firebase, { db } from "../.././config/Firebase";
import colors from "../constants/Colors";
import CustomText from "../components/CustomText";

class HomeScreen extends React.Component {
  state = { currentUser: null };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate("LogInScreen"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Image
          style={styles.welcomeImage}
          source={require("../.././assets/images/black.jpg")}
        />
        <Text style={styles.text}>
          Hi {currentUser && currentUser.email}! Welcome{" "}
          {currentUser && currentUser.uid}
        </Text>
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
    resizeMode: "cover",
    marginTop: 1
  }
});
export default HomeScreen;
