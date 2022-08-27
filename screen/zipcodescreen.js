import React from "react";
import { FlatList, TouchableHighlight } from "react-native";
import { StatusBar, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Krabi', code: '81000' },
    { place: 'Surat Thani', code: '84000' },
    { place: 'Buri Ram', code: '31000' },
    { place: 'Phangnga', code: '82000' },
    { place: 'Phuket', code: '83000' },
   ]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate("Weather", {zipCode: code})
    }}>
        <View style= {style.zipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>

)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
            data = {availableZipItems}
            key = {_keyExtractor}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
        <StatusBar styte="auto" />
        </View>  
    )
}

const style = StyleSheet.create(
    {
      zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      zipPlace: {
        flex: 1,
      },
      zipCode: {
        flex: 1,
      }
    }
  ) 