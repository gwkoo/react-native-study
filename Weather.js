import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient} from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

// export default class Weather extends Component {
//     render() {
//         return (
//             <LinearGradient 
//                 colors={['#00c6fb', '#005bea']}
//                 style={styles.container}>

//                 <View style={styles.upper}>
//                     <Ionicons color="white" size={144} name="ios-rainy"/>
//                     <Text style={styles.temp}>20도</Text>                    
//                 </View>
//                 <View style={styles.lower}>
//                     <Text style={styles.title}>Raining like a MF</Text>
//                     <Text style={styles.subTitle}>For more info look outside</Text>
//                 </View>
//             </LinearGradient>
//         );
//     }
// }

const weatherCases = {
    Rain: {
        colors: ['#00c6fb', '#005bea'],
        title: "Rainy",
        subtitle: "비",
        icon: "weather-pouring"
    },
    Clear: {
        colors: ['#FEF253', '#FF7300'],
        title: "Sunny",
        subtitle: "햇빛",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors: ['#00ECBC', '#007ADF'],
        title: "Thunderstorm",
        subtitle: "뇌우",
        icon: "weather-lightning-rainy"
    },
    Clouds: {
        colors: ['#D7D2CC', '#304352'],
        title: "Clouds",
        subtitle: "흐림",
        icon: "weather-cloudy"
    },
    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        title: "Snow",
        subtitle: "눈",
        icon: "weather-snowy"
    },
    Drizzle: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Drizzle",
        subtitle: "이슬비",
        icon: "weather-rainy"
    },
    Haze: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Haze",
        subtitle: "안개(연무)",
        icon: "weather-fog"
    },
    Mist: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Mist",
        subtitle: "안개(박무)",
        icon: "weather-fog"
    }
}

export default Weather = ({ weatherName, temperature }) => {
    return (
        <LinearGradient 
            colors={weatherCases[weatherName].colors}
            style={styles.container}>

            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.temp}>{temperature}˚</Text>                    
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subTitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    temp: {
        fontSize: 48,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 10,
        fontWeight: '300'
    },
    subTitle: {
        fontSize: 24,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 24
    }
});