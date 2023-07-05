import React, { useState } from "react";
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from "../Components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
    }

    return (
        <View style={styles.background}>
            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={setSearchTerm} 
                onSearhTermSubmit={searchApi}
            />
            <Text>We have found {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({ 
    background: {
        backgroundColor: 'white',
        flex: 1
    }
});

export default SearchScreen;
