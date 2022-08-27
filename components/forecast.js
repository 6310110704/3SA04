import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Forecast(props) {
    return (
        <View>
            <Text style={style.normalText}>main</Text>
            <Text style={style.normalText}>{props.main}</Text>
            <Text style={style.normalText}>description</Text>
            <Text style={style.normalText}>{props.description}</Text>
            <View style= {{
                flexDirection: "row",
                justifyContent: 'center',

            }}>
                <Text style={style.tempNum}>{props.temp}</Text>
                <Text style={style.normalText}> °C</Text>
            </View>
            <View>
                    <Text style={style.normalText}>Humidity {props.humidity} %  </Text>
                    <Text style={style.normalText}>Feel Like {props.feels_like} °C    </Text>
                </View>
        </View> 
    );
}

const style = StyleSheet.create(
    {
        normalText: {
            textAlign: 'center',
            fontSize: 30,
            fontWeight: "bold",
            color: 'white',

        },

        tempNum: {
            fontSize: 60, 
            fontWeight: "bold", 
            color: 'white', 
            textAlign: 'center',
            lineHeight: 58

        }
    }
)