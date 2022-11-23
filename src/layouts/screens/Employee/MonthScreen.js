import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../utils/globalStyles";

const Month = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.today}>
                <Text style={styles.pageTitle}>January, 01-01-2022</Text>
            </View>
            <View style={styles.listBox}>
                <Text style={styles.listText}>Abc Store</Text>
                <Text style={styles.listDate}>22-10-2022</Text>
            </View>
            <View style={styles.listBox}>
                <Text style={styles.listText}>Abc Store</Text>
                <Text style={styles.listDate}>22-10-2022</Text>
            </View>
            <View style={styles.listBox}>
                <Text style={styles.listText}>Abc Store</Text>
                <Text style={styles.listDate}>22-10-2022</Text>
            </View>
            <View style={styles.listBox}>
                <Text style={styles.listText}>Abc Store</Text>
                <Text style={styles.listDate}>22-10-2022</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10
    },
    today:{
        marginTop:10,
        marginBottom:5
    },
    pageTitle:{
        color:COLORS.black,
        fontSize:16,
        fontWeight:'bold'
    },
    listBox:{
        backgroundColor:COLORS.white,
        paddingVertical:10,
        paddingHorizontal:8,
        borderRightWidth:4,
        borderRightColor:COLORS.blue,
        borderRadius:10,
        marginVertical:5
    },
    listText:{
        fontSize:16,
        color:COLORS.black,
        marginBottom:3
    },
    listDate:{
        fontSize:16,
        color:COLORS.grey
    }
});

export default Month;