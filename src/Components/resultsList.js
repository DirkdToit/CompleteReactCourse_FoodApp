import React from "react";
import { View, StyleSheet, Text, FlatList } from 'react-native';
import ResultsDetails from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <ResultsDetails itemResult={item}/>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({ 
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList;
 
