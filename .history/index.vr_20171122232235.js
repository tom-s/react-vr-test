import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sphere
} from 'react-vr';

export default class VRtest extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('pano.jpg')}/>
        <Image
          source={require('panno.png')}
      />
      </View>
    );
  }
};

AppRegistry.registerComponent('VRtest', () => VRtest);
