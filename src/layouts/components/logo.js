import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Logo = () => {
    return(
        <View style={styles.logoSection}>
            <Image style={styles.logo} source={require('../../assets/imgs/SwadeshSoftware.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    logoSection:{
        alignItems:'center',
        flex:0.4,
        justifyContent:'center',
    },
    logo:{
        height:100,
        resizeMode:'contain',
        borderRadius:10,
        position:'absolute',
        top:50
    },
});

export default Logo;