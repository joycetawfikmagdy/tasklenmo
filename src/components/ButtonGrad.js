import LinearGradient from "react-native-linear-gradient";
import React from "react";
import { Text, TouchableOpacity, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const ButtonGrad = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: "#ffff",
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "900",
    paddingTop: 20,
    paddingBottom: 20
  },
  buttonStyle: {
    height: 0.11 * SCREEN_HEIGHT,
    width: 0.9 * SCREEN_WIDTH,
    backgroundColor: "#0000FF",
    borderRadius: 10,
    shadowColor: "rgba(46, 229, 157, 0.4)",
    shadowOpacity: 1.5,
    elevation: 15,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 },
    shadowOpacity: 0.8
  }
};

export { ButtonGrad };
