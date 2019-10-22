import { createSwitchNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import CreateActivityScreen from "../screens/CreateActivityScreen";

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
    }
  },
  {
    initialRouteName: "LogInScreen"
  }
);

export default createAppContainer(SwitchNavigator);
