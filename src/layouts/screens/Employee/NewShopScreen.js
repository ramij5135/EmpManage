import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../../utils/globalStyles";
import Header from "../../components/header";

const NewShopScreen = () => {
    return(
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.primary
    }
});

export default NewShopScreen;