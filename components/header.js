import { View, Text } from 'react-native'
import React from 'react'

const Header = (props) => {
  return (
    <View style={{marginLeft:30, marginTop:30}}>
      <Text style={{fontWeight:'bold', fontSize:28, marginTop:50 , marginLeft:50 }}>
        {props.name}
        hello world
      </Text>
    </View>
  )
}

export default Header