import React from 'react';
import { StyleSheet, Text, View, ListView, Button,SafeAreaView, ScrollView  } from 'react-native';
import Medic from "../assets/data/medicaments.json"




export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: Medic,
        }
    }



    renderList() {
        return this.state.data.map(i => {
            var brut = i.price-(i.price * 23)/100
            var remise = (1- i.price/ brut) * 100
            var coef = i.price / 0.2;
            var vente = i.price * 0.2
            return (
                <Text key={i.id} style={styles.welcome}> {i.title} prix {i.price} brut = {brut} remise = {remise} coef = {coef} Vente net = {vente}</Text>
            )
        })
    }

    render() {
        return (
            <ScrollView style={styles.scrollView}>

                {this.renderList()}
                <Button
                    title="Right button"
                />
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#794BFF",
    },
    welcome: {
        fontSize: 15,
        textAlign: "center",
        margin: 100,
    },
});