import { createSwitchNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import CreateActivityScreen from "../screens/CreateActivityScreen";
import CreateRoutineScreen from "../screens/CreateRoutineScreen";

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
    }
  },
  {
    initialRouteName: "LogInScreen"
  }
);

export default createAppContainer(SwitchNavigator);
