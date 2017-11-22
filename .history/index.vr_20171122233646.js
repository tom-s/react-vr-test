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
        <Text style={{fontSize: 0.2, textAlign: 'center'}}> Go there </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('VRtest', () => VRtest);
