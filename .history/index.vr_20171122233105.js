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
        }}>
          <Image source={asset('circle.png')} />
          <Text style={{backgroundColor: '#1AC8F7', fontSize: 0.2, textAlign: 'center', color: 'red'}}> Go there </Text>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('VRtest', () => VRtest);
