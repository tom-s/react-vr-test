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
        <Image
          source={asset('circle.png')}
      />
      </View>
    );
  }
};

AppRegistry.registerComponent('VRtest', () => VRtest);
