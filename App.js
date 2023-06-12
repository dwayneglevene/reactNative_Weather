import React from 'react'
import {View,StyleSheet} from 'react-native'
import CurrentWeather from './src/components/currentWeather'
import UpcomingWeather from './src/components/UpcomingWeather'
import OurChild from './src/components/OurChild'
const App =() => {
  return(
    <View style={styles.container}>
      {/* <UpcomingWeather/> */}
      {/* <CurrentWeather /> */}

      <OurChild message={'Hello'}/>
      <OurChild message={'Greetings'}/>
      <OurChild message={'Goodbye'}/>

    </View>

  )

}


const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default App