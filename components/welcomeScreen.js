import React from 'react';
import { View, Text, Button,ImageBackground, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import App from '../App';
import Appshare from './Appshare';
import style from './style';


const HomeScreen = ({navigation}) => (

        <ImageBackground source={require('../images/back.jpg')} style={style.ImageBack}>


            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 250, marginTop: 200}}>
                <Image source={require('../images/mnn.png')} style={style.image}/>
                <Text style={style.welcome}>WELCOME TO CHEMISTRY DICTIONARY.</Text>
                <Text style={style.welcome}>A COLLECTION OF CHEMISTRY WORDS.</Text>
                <Text style={style.welcome}>SEARCH FOR A WORD AND GET THE ANSWER!</Text>
                <Button onPress={() => navigation.navigate('Dictionary')} title="Learn About Chemistry" />
                <View style={style.tutorial}>
                <Button color="brown" onPress={() => navigation.navigate('Appshare')} title="Share The App" />
                </View>
            </View>

        </ImageBackground>

);

const DetailsScreen = () => (
  <View style={{ flex: 1}}>
    <App />
  </View>
);

const welcomeScreen = StackNavigator({

  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Chemistry Dictionary',
    },
  },

  Dictionary: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'The Chemistry Dictionary',
    },
  },

  Appshare: {
    screen: Appshare,
    navigationOptions: {
      headerTitle: 'Share App',
    },
  },

});

export default welcomeScreen;
