import React, { useState } from "react";
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from "../Components/SearchBar";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState();

    return (
        <View style={styles.background}>
            <SearchBar 
                searchTerm={searchTerm} 
                onSearchTermChange={(newSearchTerm) => setSearchTerm(newSearchTerm)} 
                onSearhTermSubmit={() => console.log('Term was submitted')}
            />
            <Text>{searchTerm}</Text>
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
 
