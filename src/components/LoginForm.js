import React, { Component } from 'react';
import { Card } from './Card';
import { ButtonGrad } from './ButtonGrad';
import { Button} from './Button';
import { connect } from 'react-redux';
import { Text, ScrollView, View, Image, Dimensions} from 'react-native';
import Slider from "react-native-slider";
import Icon from 'react-native-vector-icons/FontAwesome'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class LoginForm extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft:<Icon name="arrow-left" size={30} color='#4B0082' />
 
  });

  constructor(props) {
    super(props);
   
  }

  onButtonPress() {
 
  }

  render() {
    const { containerStyle } = styles;
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={containerStyle}>

        <View style={{ marginLeft: 0.05*SCREEN_WIDTH,marginRight:0.05*SCREEN_WIDTH}}>
        
        <View style={{ flexDirection: 'row'}}>
              <View>
              <Image
                source={require('../../resources/task.png')}
                style={{ width: 100, height: 90 }}
              />
              </View>

              <View style={{ flexDirection: 'column'}}>
              <Text style={styles.blacktext}> IO </Text>

              <View style={{ flexDirection: 'row'}}>
              <View style={{flexDirection: 'column',justifyContent: 'space-between'}}>
              <Text style={styles.greytext}>Lenme Score</Text>
              <Text style={styles.blacktext}><Icon name="leaf" size={20} color="#0493B9" />73<Icon name="exclamation-circle" size={20} color="#FFA500" /></Text>
              </View>
        
              <View style={{flexDirection: 'column',justifyContent: 'space-between'}}>
              <Text style={styles.greytext}>    Credit Score</Text>
              <Text style={styles.blacktext}>  <Icon name="circle" size={20} color="#0493B9" />500-630 <Icon name="exclamation-circle" size={20} color="#FFA500" /></Text>
              
              </View>
              </View>

              <Text style={styles.greytext}>Vantage Score 4.0</Text>
              </View>
  

        </View>
        
        <View style={{justifyContent: 'space-between'}}>

          <View style={{flexDirection: 'row',marginVertical: 0.02*SCREEN_HEIGHT}}>
            <Card color='#00ff7f'>
             <Text style={styles.greytext}>Payment History <Icon name="exclamation-circle" size={20} color="#FFA500" /></Text>
             <Text style={styles.blacktext}>1 yr 5 mos</Text>
            </Card>
            <Card color='#00ff7f'>
             <Text style={styles.greytext}>Credit Utilization <Icon name="exclamation-circle" size={20} color="#FFA500" /></Text>
             <Text style={styles.blacktext}>100%</Text>
            </Card>
          </View>

          <View style={{flexDirection: 'row',marginVertical: 0.02*SCREEN_HEIGHT}}>
            <Card color="#FFA500">
             <Text style={styles.greytext}>Total Accounts<Icon name="exclamation-circle" size={20} color="#FFA500" /></Text>
             <Text style={styles.blacktext}>2</Text>
            </Card>
            <Card color="#FFA500">
             <Text style={styles.greytext}>Total Accounts <Icon name="exclamation-circle" size={20} color="#FFA500" /></Text>
             <Text style={styles.blacktext}>11%</Text>
            </Card>
          </View>

          <View style={{flexDirection: 'row',marginVertical: 0.02*SCREEN_HEIGHT}}>
            <Card color="#FFA500">
             <Text style={styles.greytext}>Annual Income<Icon name="exclamation-circle" size={20} color="#FFA500" /></Text>
             <Text style={styles.blacktext}>$53,000/yr</Text>
            </Card>
            <Card color="#FFA500">
             <Text style={styles.greytext}>DeroGatory Marks<Icon name="exclamation-circle" size={20} color="#FFA500" /></Text>
             <Text style={styles.blacktext}>3</Text>
            </Card>
          </View>
        </View>

        <View style={{flexDirection: 'row',justifyContent: 'flex-start'}}>

        <View style={{flexDirection: 'column',justifyContent: 'flex-start'}}>
        <Text style={styles.purpletext}>Investment Amount</Text>
        <Text style={styles.blacktext}>$970</Text>
        </View>
        
        <View style={{flexDirection: 'column',justifyContent: 'flex-start'}}>
        <Text style={styles.purpletext}>Payment Period</Text>
        <View style={{flexDirection: 'row',justifyContent: 'flex-start'}}>
        <Text style={styles.blacktext}>1</Text>
        <Text style={{fontSize:10,marginBottom:-1}}>month</Text>
        </View>
        </View>
        </View>
        

        <View>
        <Text style={styles.purpletext}>Annual Interests</Text>
        <Text style={styles.greytext}>Recommended interest rate : 3%</Text>
        <Text style={styles.blacktext}>4%</Text>
        </View>

        <Slider
        style={{width: 0.9 * SCREEN_WIDTH, height: 0.08 * SCREEN_HEIGHT,borderRadius: 50,alignSelf: 'center'}}
        minimumValue={0}
        maximumValue={100}
        maximumTrackTintColor='#d3d3d3'  
        minimumTrackTintColor='#0000FF'
        thumbTintColor='#ffff'
        value={30}
        thumbStyle={{ shadowColor: 'rgba(46, 229, 157, 0.4)',shadowOpacity: 1.5,elevation: 10,
        shadowRadius: 20 ,shadowOffset : { width: 10, height: 10},height: 30,width:30,borderRadius: 50}}
        trackStyle={{height: 0.017 * SCREEN_HEIGHT,borderRadius: 50}}
        />
    
      <View style={styles.textCon}>
        <Text style={styles.greytext}>0%</Text>
        <Text style={styles.greytext}>100 %</Text>
      </View>

      <View style={{alignSelf: 'center'}} >   
      <Button onPress={this.onButtonPress()}>
          Dismiss
      </Button>
      </View>

      <View style={{alignSelf: 'center'}}>
      <ButtonGrad onPress={this.onButtonPress()}>
          Make Offer
      </ButtonGrad>
      </View>

      </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    
    backgroundColor: 'white',

    

  },
  textCon: {
        width: 0.9 * SCREEN_WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    greytext: {
    color: '#A9A9A9',
    fontSize: 16,
    fontWeight: '300',
    alignSelf: 'flex-start',
    padding: 5,
  },
  purpletext: {
    color: '#4B0082',
    fontSize: 16,
    fontWeight: '300',
    padding: 5,
  },
  blacktext: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    padding: 5,
  }
};

export default(LoginForm);



