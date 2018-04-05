import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {ImageBackground, TextInput, ScrollView} from 'react-native';
import style from './components/style';
import chemistry_notes from './chemistry_notes.json';

export default class App extends Component{

  constructor(props) {
         super(props);
         this.state = {
             input: '' ,
             output: ''
         };
 }

  showMeaning = () => {
    var meaning = this.state.input in chemistry_notes ?  chemistry_notes[this.state.input] : "Word Not Found. Make sure you type the correct spelling" ;
    this.setState({ output : meaning });
}

  render() {
    return (
      <ImageBackground source={require('./images/back1.jpg')} style={style.ImageBackground}>
            <ScrollView>
                  <View style={style.container}>

                      <Text style={style.header}>
                             Enter A Chemistry Word:
                      </Text>

                      <TextInput
                      style={style.TextInput}
                      placeholder="search"
                      underlineColorAndroid="transparent"
                      placeholderTextColor="rgba(0,0,0,0.3)"
                      autoCapitalize='none'
                      returnKeyType="search"
                      text={this.state.input}
                      onSubmitEditing={this.showMeaning}
                      onChangeText={ (e) => this.setState({ input: e })}>
                      </TextInput>

                      <Text style={style.meaning}>
                             Its Defination is:
                      </Text>
                      <View style={style.containerMeaning}>
                      <Text style={style.view}>
                         {this.state.output}
                      </Text>
                      </View>

                      <View style={style.copy}>
                      <Text style={style.textCopy}>
                         Copyright Samuel Kapansa
                      </Text>
                      </View>

                  </View>
            </ScrollView>
      </ImageBackground>
    );
  }
}
