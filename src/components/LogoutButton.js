import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions
} from "react-native";
import colors from "../constants/Colors";
import font from "../constants/Fonts";
var width = Dimensions.get("window").width; //full width

const LogoutButton = props => {
  const { text, onPress } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => onPress()}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0
  },
  button: {
    margin: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.dark,
    borderRadius: 0,
    width: width,
    height: 50,
    paddingLeft: 16,
    paddingRight: 16
  },
  buttonText: {
    textTransform: "uppercase",
    fontFamily: font.regular,
    color: colors.lightWhite,
    fontSize: 16,
    paddingBottom: 16
  }
});

export default LogoutButton;
