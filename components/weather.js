import React, { useEffect, useState } from "react";
import { ImageBackground, Text, StyleSheet } from 'react-native';
import { View } from "react-native";
import Forecast from "./Forecast";
import Constants from 'expo-constants';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState(
        {
            main: 'waitting..',
            description: 'waitting..',
            temp: 0,
            humidity: 'waitting..',
            feels_like: 'waitting..',
        }
    )
    
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`);
        if (props.zipCode) {
          fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=c0d919cc900c017e3eb82c52744080e0`
          )
            .then((response) => response.json())
            .then((json) => {
              setForecastInfo({
                main: json.weather[0].main,
                description: json.weather[0].description,
                humidity: json.main.humidity,
                feels_like: json.main.feels_like,
                temp: json.main.temp,
              });
            })
            .catch((error) => {
              console.warn(error);
            });
        }
      }, [props.zipCode]);
    return (
        <ImageBackground source={require('../bg.jpg')} style={style.backdrop}>
                <View style={style.highlight}>
                <Text style={style.titleText}>Zip code is {props.zipCode}.</Text>
                <Forecast {...forecastInfo}/>
            </View>
        </ImageBackground>

    );
}

const style = StyleSheet.create(
    {
        backdrop: {
            alignItems: 'center',
            width: '100%',
            height: '100%'
        },
        highlight: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            width:"100%", 
            height:"45%", 
            paddingTop: Constants.statusBarHeight, 
            alignItems: 'center'
        },

        titleText: {
            fontSize: 32,
            fontWeight: "bold",
            color: 'tan',
            textAlign: 'center'
        }
    }
) 