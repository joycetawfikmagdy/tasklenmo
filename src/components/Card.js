import React from 'react';
import { Dimensions,View} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Card = ({color, children }) => {
  return (
    <View style={styles.containerStyle}>
      <View style={{flexDirection: 'row'}}>
        <View style={{...styles.margined, backgroundColor: color }} >
        </View>
        <View>
        {children}
        </View>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#d3d3d3',
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    shadowColor: '#d3d3d3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1.5,
    shadowRadius: 2,
    elevation: 15,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    height: 0.11 * SCREEN_HEIGHT,
    width: 0.45 * SCREEN_WIDTH ,
  },
  margined: {
    borderRadius: 10,
    height: 0.11 * SCREEN_HEIGHT,
    width: 0.01 * SCREEN_WIDTH ,
  }
};

export { Card };