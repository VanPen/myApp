import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import MapView , {Marker} from 'react-native-maps';

export default function Profile() {
        const haha = {
        };

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            setErrorMsg(
                'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
            );
            if (this.marker) {
                this.marker._component.animateMarkerToCoordinate(
                    nextProps.coordinate,
                    duration
                );
            }
        } else {
            (async () => {
                let { status } = await Location.requestPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                }

                let location = await Location.getCurrentPositionAsync({});
                setLocation(location);
            })();
        }
    });

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location)
        const coordinate = JSON.parse(text)
        console.log(coordinate);
        haha.latitude = coordinate.coords.latitude
        haha.longitude = coordinate.coords.longitude
        console.log(haha)
    }

    return (
        <View style={styles.container}>
            <MapView style={styles.map}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
    },
    map: {
        width: '100%',
        height: '100%'
    }
});
