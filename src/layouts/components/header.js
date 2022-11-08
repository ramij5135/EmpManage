import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = (props) => {
    // console.log('props=========>', props);
    const {title} = props;
    return(
        <>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={30} />
                <Text style={styles.headerBack}>{title}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'rgba(255,255,255,0.4)',
        height:60,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20
    },
    headerBack:{
        fontFamily:'Poppins-SemiBold',
        color:'#2a2a22',
        fontSize:16,
        marginLeft:15
    }
});

export default Header;