import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../constants/Colors";
import font from "../constants/Fonts";

import Arrow from "../icons/Arrow";

class MenuButton extends Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.button} onPress={() => onPress()}>
        <Text style={styles.buttonText}>{text}</Text>
        <Arrow></Arrow>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 32,
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
    paddingLeft: 16,
    paddingRight: 16
  },
  buttonText: {
    color: colors.black,
    fontFamily: font.regular,
    fontSize: 16
  }
});

export default MenuButton;
