import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';

const ResultsDetails = ({ itemResult }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{ uri: itemResult.image_url }}/>
            <Text style={styles.name}>{itemResult.name}</Text>
            <Text>{itemResult.rating} Stars, {itemResult.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({ 
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold'
    },
    container: {
        marginLeft: 10
    }
});

export default ResultsDetails;
 
