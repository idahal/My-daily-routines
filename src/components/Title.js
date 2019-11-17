import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import colors from "../constants/Colors";
import font from "../constants/Fonts";

var width = Dimensions.get("window").width; //full width

const Title = props => {
  const { title } = props;
  return (
    <View style={styles.topview}>
      <Text style={styles.titletext}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topview: {
    width: width,
    height: 150,
    position: "relative",
    alignItems: "center",
    marginTop: 50,
    backgroundColor: colors.dark
  },
  titletext: {
    color: colors.lightWhite,
    position: "absolute",
    top: "3rem",
    textAlign: "center",
    fontSize: "1.5rem",
    fontFamily: font.gloria,
    fontWeight: "100",
    textTransform: "uppercase"
  }
});
export default Title;
