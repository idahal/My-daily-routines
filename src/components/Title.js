import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import colors from "../constants/Colors";
import font from "../constants/Fonts";

var width = Dimensions.get("window").width; //full width
// var height = Dimensions.get("window").height; //full height

const Title = props => {
  const { title, text } = props;
  return (
    <View style={styles.topview}>
      <Text style={styles.titletext}>{title}</Text>
      <View style={styles.circle}>
        <Text style={styles.welcometext}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topview: {
    width: width,
    height: 150,
    position: "relative",
    marginTop: 50,
    backgroundColor: colors.dark
  },
  titletext: {
    color: colors.lightWhite,
    position: "absolute", // child
    top: 40, // position where you want
    left: "1rem",
    fontSize: "1.5rem",
    fontFamily: font.main,
    fontWeight: "800",
    textTransform: "uppercase"
  },
  circle: {
    width: 100,
    height: 100,
    position: "absolute", // child
    top: "1.5rem", // position where you want
    right: "1rem",
    borderRadius: 50,
    backgroundColor: colors.lightWhite
  },
  welcometext: {
    color: colors.dark,
    position: "absolute", // child
    top: "1rem", // position where you want
    right: 10,
    fontSize: "1rem",
    fontFamily: font.gloria,
    width: "70%",
    transform: [{ rotate: "5deg" }]
  }
});
export default Title;
