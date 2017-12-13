import React from 'react'
import {
  AppRegistry,
  asset,
  Pano,
  VideoPano,
  Text,
  View,
  VrButton
} from 'react-vr'

export default class VRtest extends React.Component {
  state = {
    textColor: 'white'
  }
  render = () => {
    const { textColor } = this.state
    return (
      <View>
        {/* <Pano source={asset('pano.jpg')} /> */}
        <Pano source={[
          asset('cubemap/output0.png'),
          asset('cubemap/output1.png'),
          asset('cubemap/output2.png'),
          asset('cubemap/output3.png'),
          asset('cubemap/output4.png'),
          asset('cubemap/output5.png')
        ]}
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
    )
  }
}

AppRegistry.registerComponent('VRtest', () => VRtest)
