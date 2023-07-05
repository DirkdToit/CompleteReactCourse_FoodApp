import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from "../Components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async (searchNewTerm) => {
        console.log('Searched API');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchNewTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
            setErrorMessage("");
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    }   

    //Never call an api in here 
    //Api gets called > state gets updated > Rerender component > api gets called => Infinite loop
    //That is why useEffect is used, and not just "searchApi('Pasta')"

    useEffect(() => {
        searchApi('Pasta');
    }, []
    );

    return (
        <View style={styles.background}>
            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={setSearchTerm} 
                onSearhTermSubmit={() => {searchApi(searchTerm)}}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
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
