import React, { Component } from 'react';
import { Card } from './Card';
import { CardSection } from './CardSection';
import { Input } from './input';
import { Button } from './Button';
import { Buttonn } from './Buttonn';
import { connect } from 'react-redux';
import { Text, ScrollView, View, Image, Dimensions} from 'react-native';
import { Spinner } from './Spinner';
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
      <View style={{flex: 1, height:200}}>
        <ScrollView contentContainerStyle={containerStyle}>
        
        <View style={{ flexDirection: 'row',marginLeft: 0.05*SCREEN_WIDTH}}>
              <Image
                source={require('../../resources/task.png')}
                style={{ width: 100, height: 90 }}
              />
              <View style={{ flexDirection: 'column'}}>
              <Text style={styles.blacktext}> IO </Text>


              <View style={{flexDirection: 'row',justifyContent: 'flex-start'}}>
              <Text style={styles.greytext}>Lenme Score</Text>
              <Text style={styles.greytext}>    Credit Score</Text>
              </View>
        
              <View style={{flexDirection: 'row',justifyContent: 'flex-start'}}>
              <Text style={styles.blacktext}><Icon name="leaf" size={30} color="#0493B9" />73 <Icon name="exclamation-circle" size={30} color="#FFA500" /></Text>
              <Text style={styles.blacktext}>  <Icon name="circle" size={30} color="#0493B9" />500-630 <Icon name="exclamation-circle" size={30} color="#FFA500" /></Text>
              </View>

              <Text style={styles.greytext}>Vantage Score 4.0</Text>
              </View>
   

        </View>
        
        <View style={{marginLeft: 0.05*SCREEN_WIDTH,justifyContent: 'flex-start'}}>

          <View style={{flexDirection: 'row'}}>
            <Card color='#00ff7f'>
             <Text style={styles.greytext}>Payment History <Icon name="exclamation-circle" size={30} color="#FFA500" /></Text>
             <Text style={styles.blacktext}>1 yr 5 mos</Text>
            </Card>
            <Card color='#00ff7f'>
             <Text style={styles.greytext}>Credit Utilization <Icon name="exclamation-circle" size={30} color="#FFA500" /></Text>
             <Text style={styles.blacktext}>100%</Text>
            </Card>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Card color="#FFA500">
             <Text style={styles.greytext}>Total Accounts<Icon name="exclamation-circle" size={30} color="#FFA500" /></Text>
             <Text style={styles.blacktext}>2</Text>
            </Card>
            <Card color="#FFA500">
             <Text style={styles.greytext}>Total Accounts<Icon name="exclamation-circle" size={30} color="#FFA500" /></Text>
             <Text style={styles.blacktext}>11%</Text>
            </Card>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Card color="#FFA500">
             <Text style={styles.greytext}>Annual Income<Icon name="exclamation-circle" size={30} color="#FFA500" /></Text>
             <Text style={styles.blacktext}>$53,000/yr</Text>
            </Card>
            <Card color="#FFA500">
             <Text style={styles.greytext}>DeroGatory Marks<Icon name="exclamation-circle" size={30} color="#FFA500" /></Text>
             <Text style={styles.blacktext}>3</Text>
            </Card>
          </View>
        </View>

        <View style={{marginLeft: 0.05*SCREEN_WIDTH,flexDirection: 'row',justifyContent: 'flex-start'}}>
        <Text style={styles.purpletext}>Investment Amount</Text>
        <Text style={styles.purpletext}>Payment Period</Text>
        </View>
        
        <View style={{marginLeft: 0.05*SCREEN_WIDTH,flexDirection: 'row',justifyContent: 'flex-start'}}>
        <Text style={styles.blacktext}>$970</Text>
        <Text style={styles.blacktext}>          1<Text style={{fontSize:10}}>month</Text></Text>
        </View>


        <View style={{marginLeft: 0.05*SCREEN_WIDTH}}>
        <Text style={styles.purpletext}>Annual Interests</Text>
        <Text style={styles.greytext}>Recommended interest rate : 3%</Text>
        <Text style={styles.blacktext}>4%</Text>
        </View>

        <Slider
        style={{width: 0.9 * SCREEN_WIDTH, height: 0.08 * SCREEN_HEIGHT,borderRadius: 50,alignSelf: 'center'}}
        minimumValue={0}
        maximumValue={100}
        maximumTrackTintColor='#d3d3d3'  
        minimumTrackTintColor='#119EC2'
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
      <Buttonn onPress={this.onButtonPress()}>
          Dismiss
      </Buttonn>
      </View>

      <View style={{alignSelf: 'center'}}>
      <Button onPress={this.onButtonPress()}>
          Make Offer
      </Button>
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
    color: '#d3d3d3',
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
    fontSize: 30,
    fontWeight: '900',
    padding: 5,
  }
};

export default(LoginForm);



