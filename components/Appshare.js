import React, { Component } from 'react';
import { ImageBackground, Image , AppRegistry, StyleSheet, Text, TouchableOpacity, View, Clipboard, ToastAndroid, AlertIOS, Platform } from 'react-native';
import Share, {ShareSheet, Button} from 'react-native-share';

export default class Appshare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }
  onCancel() {
    console.log("CANCEL")
    this.setState({visible:false});
  }
  onOpen() {
    console.log("OPEN")
    this.setState({visible:true});
  }
  render() {

    let shareOptions = {
      title: "React Native",
      message: "Download Kaps Chemistry Dictionary",
      url: "http://play.google.com",
      subject: "Share Link" //  for email
    };

    return (


      <View style={styles.container}>
      <View style={{paddingLeft:20}}>
      <Image source={require('../images/share.png')} style={styles.image}/>
      </View>
      <Text style={{fontSize: 25, color: 'black'}}>Share The Link For People To Download The App And Let More People Learn Great Words About Chemistry!</Text>

          <View style={styles.instructions}>
            <Text style={{opacity: 0.5, fontSize: 20, marginTop: 10, backgroundColor: 'blue', borderRadius: 10, padding: 10, paddingLeft: 20, color: 'white'}} onPress={()=>{ Share.open(shareOptions);}}>Share Link</Text>
          </View>

        <ShareSheet visible={this.state.visible} onCancel={this.onCancel.bind(this)}>

                <Button
                        onPress={()=>{
                    this.onCancel();
                    setTimeout(() => {
                      Share.shareSingle(Object.assign(shareOptions, {
                        "social": "twitter"
                      }));
                    },300);
                  }}>
                  Twitter
                </Button>

                <Button
                        onPress={()=>{
                    this.onCancel();
                    setTimeout(() => {
                      Share.shareSingle(Object.assign(shareOptions, {
                        "social": "facebook"
                      }));
                    },300);
                  }}>
                  Facebook
                </Button>

                <Button
                        onPress={()=>{
                    this.onCancel();
                    setTimeout(() => {
                      Share.shareSingle(Object.assign(shareOptions, {
                        "social": "whatsapp"
                      }));
                    },300);
                  }}>
                  Whatsapp
              </Button>

                <Button
                        onPress={()=>{
                    this.onCancel();
                    setTimeout(() => {
                      Share.shareSingle(Object.assign(shareOptions, {
                        "social": "googleplus"
                      }));
                    },300);
                  }}>Google +
               </Button>

                <Button
                        onPress={()=>{
                    this.onCancel();
                    setTimeout(() => {
                      Share.shareSingle(Object.assign(shareOptions, {
                        "social": "email"
                      }));
                    },300);
                  }}>
                  Email
                </Button>

                <Button
                  onPress={()=>{
                    this.onCancel();
                    setTimeout(() => {
                      if(typeof shareOptions["url"] !== undefined) {
                        Clipboard.setString(shareOptions["url"]);
                        if (Platform.OS === "android") {
                          ToastAndroid.show('Link copiado al portapapeles', ToastAndroid.SHORT);
                        } else if (Platform.OS === "ios") {
                          AlertIOS.alert('Link copiado al portapapeles');
                        }
                      }
                    },300);
                  }}>
                  Copy Link
              </Button>

                <Button
                  onPress={()=>{
                    this.onCancel();
                    setTimeout(() => {
                      Share.open(shareOptions)
                    },300);
                  }}>
                  More
               </Button>

        </ShareSheet>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 210,
    marginBottom: 10,

  },

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },

  ImageBack: {
    flex: 1
  },
});
