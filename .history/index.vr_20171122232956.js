import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Image
} from 'react-vr';

export default class VRtest extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('pano.jpg')} />
        <View style={{
          backgroundColor: 'white',
          flex: 1,
          width: 0.5,
          flexDirection: 'column',
          alignItems: 'stretch',
        }}>
          <Image source={asset('circle.png')} />
          <Text style={{fontSize: 0.2, textAlign: 'center'}}> Go there </Text>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('VRtest', () => VRtest);
