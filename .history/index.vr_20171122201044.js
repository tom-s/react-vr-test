import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class VRtest extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('hester-panorama.jpg')}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('VRtest', () => VRtest);
