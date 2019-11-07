import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../constants/Colors";
import font from "../constants/Fonts";

import Arrow from "../icons/Arrow";

const MenuButton = props => {
  const { text, onPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress()}>
      <Text style={styles.buttonText}>{text}</Text>
      <Arrow></Arrow>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: "2rem",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.lightWhite,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: colors.dark,
    width: 343,
    height: 50,
    paddingLeft: "1rem",
    paddingRight: "1rem"
  },
  buttonText: {
    color: colors.black,
    fontFamily: font.main,
    fontWeight: "500",
    fontSize: "1rem"
  }
});

export default MenuButton;
