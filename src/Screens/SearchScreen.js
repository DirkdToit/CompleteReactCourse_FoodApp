import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import SearchBar from "../Components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../Components/resultsList";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }
    
    //Never call an api in here 
    //Api gets called > state gets updated > Rerender component > api gets called => Infinite loop
    //That is why useEffect is used, and not just "searchApi('Pasta')"

    return (
        <View style={styles.background}>
            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={setSearchTerm} 
                onSearhTermSubmit={() => {searchApi(searchTerm)}}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView style={{ flex: 1}}>
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender!"/>
            </ScrollView>
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
