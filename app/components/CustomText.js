import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";

class CustomText extends Component {
  setFontType = type => {
    switch (type) {
      case "extra-bold":
        return "Raleway-ExtraBold";
      case "light-italic":
        return "Raleway-LightItalic";
      default:
        return "Raleway-Regular";
    }
  };

  render() {
    const font = this.setFontType(this.props.type ? this.props.type : "normal");
    const style = [{ fontFamily: font }, this - this.props.style || {}];
    return <Text style={style}>{this.props.children}</Text>;
  }
}

export default CustomText;
