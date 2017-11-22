import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class VRtest extends React.Component {
  constructor = (props) => {
    super(props)
    this.state = {
      textColor: 'white'
    }
  }
  render = () => {
    const { textColor } = this.state
    return (
      <View>
        <Pano source={asset('pano.jpg')} />
        <VrButton
        onEnter={() => this.setState({textColor: 'red'})}
        onExit={() => this.setState({textColor: 'white'})}
        onClick={() => this.setState({textColor: 'yellow'})}
        >
          <Text
          style={{
            backgroundColor: '#777879',
            color: textColor,
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{
              translate: [10, 0, -10]
            },
            {
              rotateY: -40
            }],
          }}>
          Salon
          </Text>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('VRtest', () => VRtest);
