import React from "react";
import * as Font from "expo-font";
import { View, ActivityIndicator, StyleSheet } from "react-native";
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
      "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <SwitchNavigator />
        ) : (
          <ActivityIndicator size="large" />
        )}
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
