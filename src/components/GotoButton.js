import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../constants/Colors";
import font from "../constants/Fonts";

const GotoButton = props => {
  const { text, onPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: colors.lightWhite,
    borderColor: colors.button,
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: 0,
    width: 135,
    height: 50
  },
  buttonText: {
    textTransform: "uppercase",
    fontFamily: font.main,
    fontWeight: "800",
    color: colors.dark,
    letterSpacing: "0.05em",
    fontSize: "1rem"
  },
  buttonDisabled: {
    opacity: 0.6
  }
});

export default GotoButton;
