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
        <Pano width={1536} height={1536} source={[
          /*
          asset('cubemap/9600.png'),
          asset('cubemap/9601.png'),
          asset('cubemap/9602.png'),
          asset('cubemap/9603.png'),
          asset('cubemap/9604.png'),
          asset('cubemap/9605.png')
          */
          asset('cubemap/15360.png'),
          asset('cubemap/15361.png'),
          asset('cubemap/15362.png'),
          asset('cubemap/15363.png'),
          asset('cubemap/15364.png'),
          asset('cubemap/15365.png')
        ]} />
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
