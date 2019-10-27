import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import colors from "../constants/Colors";
import CustomText from "../components/CustomText";

const Hero = () => {
  return (
    <ImageBackground
      style={styles.welcomeImage}
      source={require("../.././assets/images/black.jpg")}
    >
      <CustomText type="gloria">
        <Text style={styles.welcometext}>Min app för:</Text>
      </CustomText>
      <CustomText type="extra-bold">
        <Text style={styles.titletext}>
          Mina{"\n"}rutiner{"\n"}i vardagen
        </Text>
      </CustomText>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  welcomeImage: {
    width: "100%",
    height: 200,
    position: "relative"
  },
  titletext: {
    color: colors.lightWhite,
    position: "absolute", // child
    top: 60, // position where you want
    left: 80,
    fontSize: 24
  },
  welcometext: {
    color: colors.lightWhite,
    position: "absolute", // child
    top: 16, // position where you want
    left: 110,
    fontSize: 24,
    textTransform: "uppercase"
  }
});
export default Hero;
