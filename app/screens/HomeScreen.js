import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import firebase from "../.././config/Firebase";
import colors from "../constants/Colors";
import Text from "../components/CustomText";

class HomeScreen extends React.Component {
  state = { currentUser: null };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }
  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hi {currentUser && currentUser.email}!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("SignUpScreen")}
        >
          <Text type="extra-bold">Tillbaka</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: colors.button,
    borderRadius: 0,
    width: 200
  }
});
export default HomeScreen;
