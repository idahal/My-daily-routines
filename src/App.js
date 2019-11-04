import React from "react";

// import * as Font from "expo-font";
import { View, StyleSheet } from "react-native";
import { AuthProvider } from "./config/auth";

import SwitchNavigator from "./navigation/Navigation";
console.disableYellowBox = ["Warning"];

function App() {
  // const [fontLoaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   loadFonts();
  // }, []);

  // const loadFonts = async () => {
  //   await Font.loadAsync({
  //     "Raleway-ExtraBold": require("./assets/fonts/Raleway-ExtraBold.ttf"),
  //     "Raleway-LightItalic": require("./assets/fonts/Raleway-LightItalic.ttf"),
  //     "Raleway-Regular": require("./assets/fonts/Raleway-Regular.ttf"),
  //     "GloriaHallelujah-Regular": require("./assets/fonts/GloriaHallelujah-Regular.ttf")
  //   });
  //   setLoaded(true);
  // };

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
