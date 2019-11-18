// import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";
import HomeScreen from "../screens/HomeScreen";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import CreateActivityScreen from "../screens/CreateActivityScreen";
import CreateRoutineScreen from "../screens/CreateRoutineScreen";
import SavedRoutinesScreen from "../screens/SavedRoutinesScreen";
import DisplayRoutineScreen from "../screens/DisplayRoutineScreen";
import SettingScreen from "../screens/SettingScreen";

const SwitchNavigator = createSwitchNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },
    LogInScreen: {
      screen: LogInScreen
    },
    SignUpScreen: {
      screen: SignUpScreen
    },
    CreateActivityScreen: {
      screen: CreateActivityScreen
    },
    CreateRoutineScreen: {
      screen: CreateRoutineScreen
    },
    SavedRoutinesScreen: {
      screen: SavedRoutinesScreen
    },
    DisplayRoutineScreen: {
      screen: DisplayRoutineScreen
    },
    SettingScreen: {
      screen: SettingScreen
    }
  },
  {
    initialRouteName: "LogInScreen"
  }
);

export default createBrowserApp(SwitchNavigator);
