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
        <Text
        style={{
          backgroundColor: '#777879',
          fontSize: 0.8,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{
            translate: [0, 0, -10],
            rotateX: 90
          }],
        }}>
      Salon
      </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('VRtest', () => VRtest);