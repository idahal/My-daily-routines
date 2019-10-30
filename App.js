import React from "react";
import * as Font from "expo-font";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { AuthProvider } from "./config/auth";

// import Text from "./app/components/CustomText";
// import colors from "./app/constants/Colors";

import SwitchNavigator from "./app/navigation/Navigation";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "Raleway-ExtraBold": require("./assets/fonts/Raleway-ExtraBold.ttf"),
      "Raleway-LightItalic": require("./assets/fonts/Raleway-LightItalic.ttf"),
      "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
      "GloriaHallelujah-Regular": require("./assets/fonts/GloriaHallelujah-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <AuthProvider>
          {this.state.fontLoaded ? (
            <SwitchNavigator />
          ) : (
            <ActivityIndicator size="large" />
          )}
        </AuthProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
