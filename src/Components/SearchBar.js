import React from "react";
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchTerm, onSearchTermChange, onSearhTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Search"
                autoCorrect={false}
                autoCapitalization='none'
                value={searchTerm}
                onChangeText={newSearchTerm => onSearchTermChange(newSearchTerm)}
                onEndEditing={() => onSearhTermSubmit()}
            />
        </View>
    );
};

const styles = StyleSheet.create({ 
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 10
    }, 
    inputStyle: {
        flex: 1,
        paddingTop:0,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;
 
