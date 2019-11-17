import App from "./App.js";
import { AppRegistry } from "react-native";

// Register the app
AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  initialProps: {},
  rootTag: document.getElementById("root")
});
