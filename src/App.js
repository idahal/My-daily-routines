import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { AuthProvider } from "./config/auth";

import SwitchNavigator from "./navigation/Navigation";
import colors from "./constants/Colors";

console.disableYellowBox = ["Warning"];

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

function App() {
  return (
    <View style={styles.container}>
      <AuthProvider>
        <SwitchNavigator />
      </AuthProvider>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightWhite,
    height: height,
    width: width
  }
});
