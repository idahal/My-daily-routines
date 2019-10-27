import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import colors from "../constants/Colors";
import CustomText from "../components/CustomText";

class Title extends Component {
  render() {
    const { title, text } = this.props;
    return (
      <View style={styles.topview}>
        <CustomText type="extra-bold">
          <Text style={styles.titletext}>{title}</Text>
        </CustomText>
        <View style={styles.circle}>
          <CustomText type="gloria">
            <Text style={styles.welcometext}>{text}</Text>
          </CustomText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topview: {
    width: "100%",
    height: 150,
    position: "relative",
    marginTop: 50,
    backgroundColor: colors.dark
  },
  titletext: {
    color: colors.lightWhite,
    position: "absolute", // child
    top: 40, // position where you want
    left: 16,
    fontSize: 24,
    textTransform: "uppercase"
  },
  circle: {
    width: 100,
    height: 100,
    position: "absolute", // child
    top: 25, // position where you want
    right: 16,
    borderRadius: "50%",
    backgroundColor: colors.lightWhite
  },
  welcometext: {
    color: colors.lightWhite,
    position: "absolute", // child
    top: 16, // position where you want
    right: 10,
    fontSize: 14,
    width: "70%",
    transform: "rotate(5deg)",
    color: colors.black
  }
});
export default Title;
