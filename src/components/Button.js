import React from "react";
import { Text, TouchableOpacity, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: "#DC143C",
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "900",
    paddingTop: 20,
    paddingBottom: 10
  },
  buttonStyle: {
    height: 0.1 * SCREEN_HEIGHT,
    width: 0.9 * SCREEN_WIDTH,
    backgroundColor: "#ffff",
    borderRadius: 10,
    shadowColor: "rgba(46, 229, 157, 0.4)",
    shadowOpacity: 1.5,
    elevation: 15,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 },
    shadowOpacity: 0.8
  }
};

export { Button };
