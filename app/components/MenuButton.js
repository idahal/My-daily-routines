import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../constants/Colors";
import CustomText from "../components/CustomText";
import Arrow from "../icons/Arrow";

class MenuButton extends Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.button} onPress={() => onPress()}>
        <CustomText type="regular">
          <Text style={styles.buttonText}>{text}</Text>
        </CustomText>
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
    fontSize: 16,
    paddingBottom: 16
  }
});

export default MenuButton;
