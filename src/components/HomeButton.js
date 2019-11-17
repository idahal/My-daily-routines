import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import colors from "../constants/Colors";
import font from "../constants/Fonts";
var width = Dimensions.get("window").width; //full width

const HomeButton = props => {
  const { text, onPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress()}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 0,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: colors.lightWhite,
    borderRadius: 0,
    width: width,
    height: 50,
    paddingLeft: 16,
    paddingRight: 16,
    position: "absolute",
    top: 0,
    zIndex: 2
  },
  buttonText: {
    textTransform: "uppercase",
    fontFamily: font.main,
    color: colors.dark,
    fontSize: "1rem"
  }
});

export default HomeButton;
