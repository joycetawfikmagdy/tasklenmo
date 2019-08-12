import React from 'react';
import { Text, TouchableOpacity, Dimensions,View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <LinearGradient colors={['#4c669f', '#3b5998']} style={{ flex: 1 }}
    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}>
      <Text style={textStyle}>
        {children}
      </Text>
     </LinearGradient>
    </TouchableOpacity>
     
  );
};

const styles = {

  textStyle: {
    color: '#FF0000',
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
    paddingTop: 20,
    paddingBottom: 10
  },
  buttonStyle: {
    height: 0.14 * SCREEN_HEIGHT,
    width: 0.9 * SCREEN_WIDTH ,
    backgroundColor: '#00008b',
    borderRadius:10,
  }
};

export { Button };