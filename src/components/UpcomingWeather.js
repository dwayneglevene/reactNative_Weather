import React from 'react';
{/* <script src="http://172.17.128.1:8097"></script> */}
import { FlatList,SafeAreaView,StyleSheet,Text,View,StatusBar,ImageBackground} from 'react-native';
import { Feather } from '@expo/vector-icons';
// const DATA = [
// // JSON DATA FROM api
//     {
//         dt_txt: "2023-02-18 12:00:00",
//         main: {
          
//           temp_min: 296.34,
//           temp_max: 298.24,
          
//         },
//         weather: [
//           {
//             main: "Rain",
            
//           }
//         ]
//       },
//     ]

const DATA = [
    {
        dt_txt: '77',
      title: 'First Item',
      airQuality: 'Moderate	',
    },
    {
        dt_txt: '77',

      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      airQuality: 'Yellow ',

    },
    {
        dt_txt: '77',

      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      airQuality: 'Green ',
    },
    {
        dt_txt: '77',

      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Fourth Item',
      airQuality: 'Green ',
    }, {
        dt_txt: '77',

      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Fifth Item',
      airQuality: 'Green ',
    },
  ];
    
    // creates the item what it includess (poperties) and the way it will be rendered

const Item = (props) =>{
    const { dt_txt,title,airQuality,condition} = props

    return(
        <View style = {styles.item}>
            <Feather name={'sun'} size={50} color={'white'} />
       <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{title}</Text>
            <Text style={styles.min}>{airQuality}</Text>
            {/* <Text>{condition}</Text> */}

 


        </View>
    )
}


// component that shows upcoming weather
// takes the item and assigns the data
// uses the flatlist to showcase said data


// data and renderitem from flatlist are creact by react native the renderitem in the curly bracket was created by me

const UpcomingWeather = () => {

    const renderItem = ({item}) =>{
        <Item 
        // condition={item.weather[0].main} 
        dt_txt={item.dt_txt} 
        min={item.title} 
        max={item.airQuality}
        />
        // console.log({renderItem2})

        // console.log(condition)
    }


    return(
        
        <SafeAreaView style={styles.container}>

<ImageBackground source={require('../../assets/upcoming-background.jpg')} style={styles.image} >

            <Text>
                    Upcoming weather
                    Mr.Levene !
                    </Text>

                   
                    {/* <FlatList
                        data={DATA} 
                        renderItem={renderItem} 
                    /> */}
   <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} dt_txt={item.dt_txt} airQuality={item.airQuality} />}
        keyExtractor={item => item.id}

      />
 

 </ImageBackground>   

        </SafeAreaView>
    )

}

const styles =StyleSheet.create({
    container:{
      
        flex:1,
        marginTop:StatusBar.currentHeight || 0,
        backgroundColor:'royalblue'
        
    },
    item:{
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
        felxDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth:5,
        backgroundColor:'pink'
    },
    temp:{
      color:'white',
      fontSize:20
    },
    date:{
      color:"white",
      fontSize:25
    },
    image:{
      flex:1,
    }
})
export default UpcomingWeather;