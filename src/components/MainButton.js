import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../constants/Colors";
import font from "../constants/Fonts";

const LogoutButton = props => {
  const { text, onPress, disabled } = props;
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: "2rem",
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
    fontFamily: font.main,
    fontWeight: "800",
    color: colors.lightWhite,
    letterSpacing: "0.05em",
    fontSize: "1rem"
  },
  buttonDisabled: {
    opacity: 0.6
  }
});

export default LogoutButton;
