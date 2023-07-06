import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    };

    useEffect (() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.imageStyle} source={{ uri: item}}/>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({ 
    imageStyle:{
        height: 300,
        width: 400,
        marginBottom: 10
    },
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    containerStyle: {
        alignItems: 'center'
    }
});

export default ResultsShowScreen;
 
