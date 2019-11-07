import React from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";
import colors from "../constants/Colors";
import font from "../constants/Fonts";
import { Dimensions } from "react-native";
import heroImage from "../assets/images/black.jpg";

var width = Dimensions.get("window").width; //full width
// var height = Dimensions.get("window").height; //full height

const Hero = () => {
  return (
    <ImageBackground style={styles.welcomeImage} source={heroImage}>
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
    height: 250,
    position: "relative"
  },
  titletext: {
    color: colors.lightWhite,
    fontFamily: font.main,
    fontWeight: "800",
    letterSpacing: "0.02em",
    position: "absolute", // child
    top: "35%", // position where you want
    left: "20%",
    fontSize: "1.5rem"
  },
  welcometext: {
    color: colors.lightWhite,
    fontFamily: font.gloria,
    position: "absolute", // child
    top: "10%", // position where you want
    left: "30%",
    fontSize: "1.5rem",
    textTransform: "uppercase"
  }
});
export default Hero;
