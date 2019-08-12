import React, { Component } from "react";
import { Platform, Dimensions } from "react-native";
import { StackNavigator } from "react-navigation";
import LoginForm from "./components/LoginForm";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

class Navigator extends Component {
  render() {
    const MainNavigator = StackNavigator(
      {
        Login: {
          screen: LoginForm
        }
      },
      {
        headerMode: Platform.OS === "ios" ? "float" : "screen"
      }
    );
    return <MainNavigator />;
  }
}

export default Navigator;
