import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import colors from "../constants/Colors";
import font from "../constants/Fonts";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
// var height = Dimensions.get("window").height; //full height

const Hero = () => {
  return (
    <ImageBackground
      style={styles.welcomeImage}
      source={require("../.././assets/images/black.jpg")}
    >
      <Text style={styles.welcometext}>Min app för:</Text>
      <Text style={styles.titletext}>
        Mina{"\n"}rutiner{"\n"}i vardagen
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  welcomeImage: {
    width: width,
    height: 200,
    position: "relative"
  },
  titletext: {
    color: colors.lightWhite,
    fontFamily: font.extrabold,
    position: "absolute", // child
    top: 60, // position where you want
    left: 80,
    fontSize: 24
  },
  welcometext: {
    color: colors.lightWhite,
    fontFamily: font.gloria,
    position: "absolute", // child
    top: 16, // position where you want
    left: 110,
    fontSize: 24,
    textTransform: "uppercase"
  }
});
export default Hero;
