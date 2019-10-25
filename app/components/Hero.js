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
      <CustomText type="extra-bold">
        <Text style={styles.welcometext}>
          Mina{"\n"}rutiner{"\n"}i vardagen
        </Text>
      </CustomText>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  welcomeImage: {
    width: 400,
    height: 200,
    position: "relative"
  },
  welcometext: {
    color: colors.lightWhite,
    position: "absolute", // child
    top: 60, // position where you want
    left: 80,
    fontSize: 24
  }
});
export default Hero;
