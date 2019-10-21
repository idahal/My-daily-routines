import { createSwitchNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";

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
    }
  },
  {
    initialRouteName: "LogInScreen"
  }
);

export default createAppContainer(SwitchNavigator);
