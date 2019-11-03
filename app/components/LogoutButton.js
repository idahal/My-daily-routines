import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../constants/Colors";
import font from "../constants/Fonts";

const LogoutButton = props => {
  const { text, onPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress()}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 32,
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
    fontFamily: font.regular,
    color: colors.lightWhite,
    fontSize: 16,
    paddingBottom: 16
  }
});

export default LogoutButton;
