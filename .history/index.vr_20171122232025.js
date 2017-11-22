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

        <Sphere
        radius={0.5}
        widthSegments={20}
        heightSegments={12}
      />
      </View>
    );
  }
};

AppRegistry.registerComponent('VRtest', () => VRtest);
