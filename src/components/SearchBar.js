import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return <View style={styles.backgroundStyle}>
        <Icon name="search" size={30} style={styles.iconStyle}></Icon>
        <TextInput
        autoCapitalize="none" //büyüklük ve küçüklükle alakalı
        autoCorrect={false} //otomatik düzeltmeyi devre dışı bırakır
        style={styles.inputStyle} 
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}/> 
    </View>
};

const styles= StyleSheet.create({
    backgroundStyle:{
        marginTop: 10,
        backgroundColor:'#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection:'row'
    },
    inputStyle:{
        flex: 1,
        fontSize: 18

    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal: 15
    }
});

export default SearchBar;