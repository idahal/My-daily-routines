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
    alignSelf: "center",
    backgroundColor: colors.button,
    borderRadius: 0,
    width: 135,
    height: 50
  },
  buttonText: {
    textTransform: "uppercase",
    fontFamily: font.extrabold,
    color: colors.lightWhite,
    fontSize: 16
  }
});

export default LogoutButton;
