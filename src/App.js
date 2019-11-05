import React from "react";
import { View, StyleSheet } from "react-native";
import { AuthProvider } from "./config/auth";

import SwitchNavigator from "./navigation/Navigation";
console.disableYellowBox = ["Warning"];

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
    backgroundColor: "#fff"
  }
});
