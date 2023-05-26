import React from 'react'
import { SafeAreaView,StyleShee,Text,FlatList,View} from 'react-native';
import { Feather } from '@expo/vector-icons'
const DATA = [
   { "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 298.48,
        "feels_like": 298.74,
        "temp_min": 297.56,
        "temp_max": 300.05,
        "pressure": 1015,
        "humidity": 64,
        "sea_level": 1015,
        "grnd_level": 933
      },
      "visibility": 10000,
      "wind": {
        "speed": 0.62,
        "deg": 349,
        "gust": 1.18
      },
      "rain": {
        "1h": 3.16
      },
    }
]
const Item = (props) =>{
    const { dt_txt,min,max,condition} = props

    return(
        <View>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text>{dt_txt}</Text>
            <Text>{min}</Text>
            <Text>{max}</Text>


        </View>
    )
}

const UpcomingWeather = () => {

    const renderItem = () =>{
        <Item condition={Item.weather[0].main} dt_txt={Item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}/>
    }
    return(
        <SafeAreaView styles={styles.container}>
            <Text>
                    Upcoming weather
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                    />

            </Text>

        </SafeAreaView>
    )

}

const styles =StyleSheet.create({
    container:{
        flex:1,
        
    }
})
export default UpcomingWeather;