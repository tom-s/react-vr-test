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
        <View style={{backgroundColor: 'blue', flex: 0.5}} />
          <Image source={asset('circle.png')} />
          <Text style={{fontSize: 0.2, textAlign: 'center'}}> Go there </Text>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('VRtest', () => VRtest);
