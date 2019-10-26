import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../constants/Colors";
import CustomText from "../components/CustomText";

class LogoutButton extends Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.button} onPress={() => onPress()}>
        <CustomText type="regular">
          <Text style={styles.buttonText}>{text}</Text>
        </CustomText>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 32,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.dark,
    borderRadius: 0,
    width: "100%",
    height: 50,
    paddingLeft: 16,
    paddingRight: 16,
    position: "absolute",
    bottom: 0
  },
  buttonText: {
    textTransform: "uppercase",
    color: colors.lightWhite,
    fontSize: 16,
    paddingBottom: 16
  }
});

export default LogoutButton;
