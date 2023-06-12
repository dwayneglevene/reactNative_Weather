import React from 'react'
import {View,Text} from 'react-native'


const OurChild = (props) =>{
    const {message} = props
    return(
        <View style={{marginTop:20,height:200,width:200,backgroundColor:'red'}}>
            <Text>{message}</Text>
        </View>
    )
}

export default OurChild ;