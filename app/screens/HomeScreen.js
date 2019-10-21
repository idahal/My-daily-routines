import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import firebase from "../.././config/Firebase";
import colors from "../constants/Colors";

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
        <Button
          title="Hem"
          onPress={() => this.props.navigation.navigate("SignUpScreen")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    color: colors.text
  }
});
export default HomeScreen;
