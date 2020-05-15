import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native'
import axios from 'axios'


export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            persons : ''
        }
    }
    componentDidMount() {
        axios.get('https://api.thecatapi.com/v1/images/search').then(res => {
             const persons = res.data[0].url
            this.setState({persons})
            console.log(this.state.persons)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.persons}</Text>
                <Image
                    style={{height: 200, width: 200}}
                    source={{ uri : this.state.persons}}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    welcome: {
        margin: 10,
        backgroundColor: "#B335FF"
    },
    image: {
        width: 20,
        height: 20,
        color: '#B335FF',
    }
});