import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, PermissionsAndroid, Button} from 'react-native'
import WifiManager from 'react-native-wifi-reborn';


export const Wifi = () => {
    const [permission, setPermission] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [ssid, setSsid] = useState(true)
    
    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                title: "Precisamos da permissão Localização",
                message:
                'Para nos conectarmos ao dispositivo precisamos dessa permissão ' +
                'ela escaneia as redes Wifi.',
                buttonNeutral: "Lembrar depois",
                buttonNegative: "Negar",
                buttonPositive: "Permitir"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                try{
                    const response = await WifiManager.loadWifiList()
                    setSsid(response)
                    console.warn(response)
                } catch(error){
                    setSsid(error)
                    console.warn(error)
                }
                setIsLoading(false)
            } else {
                setPermission(false)
                setIsLoading(false)
            }
        } catch (err) {
        console.warn(err);
        }
    };

    if(isLoading){
        requestLocationPermission()
        return(
            <View style={styles.container}>
                <Text>
                    Aguarde...
                </Text>
            </View>
        )
    }
    else{
        return(
            <View style={styles.container}>
                <Text>Lista de redes</Text>

                {
                    ssid.map((item)=>{
                        return <Text>{`${item.SSID}`}</Text>
                    })
                }
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
        alignItems: 'center',
        padding: 20
    },
    image:{
        width: 300, 
        height: 300,
        borderRadius: 150
    },
    name:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    bio:{
        fontSize: 18,
    },
    error:{
        fontSize: 25,
        fontWeight: 'bold'
    },
})

