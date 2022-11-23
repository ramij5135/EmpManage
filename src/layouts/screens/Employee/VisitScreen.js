import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from "../../components/header";
import { COLORS } from "../../../utils/globalStyles";
import FullTextInput from "../../components/textInput";
import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view';
import Today from "./TodayScreen";
import Month from "./MonthScreen";

const windowWidth = Dimensions.get('window').width;
const VisitScreen = () => {
    const TabButton = (props) => {
        return(
            <MaterialTabBar
                {...props}
                labelStyle={{fontSize:15, fontWeight:'500'}}
                indicatorStyle={{backgroundColor:'green'}}
                activeColor={'green'}
            />
        );
    }
    const RenderHeader = () => {
        return(
            <>
                <Header title={'Visit'} />

                <View style={styles.header}>
                    <Image style={styles.imgIcon} source={require('../../../assets/imgs/build.png')} />
                    <Text style={styles.attendence}>Visit List</Text>
                </View>
                <View style={{paddingHorizontal:20, paddingVertical:10}}>
                    <FullTextInput iconName="file-search" />
                </View>
            </>
        )
    }
    return (
        <View style={styles.container}>
            
            {/* <View style={{flex:1}}> */}
            <Tabs.Container containerStyle={{alignSelf:'center'}} headerContainerStyle={{ backgroundColor:'transparent', elevation:0, borderBottomWidth:1, borderColor:'rgba(100,100,100,0.3)'}} renderTabBar={TabButton} renderHeader={RenderHeader}>
                <Tabs.Tab name="Today">
                    <Tabs.ScrollView showsVerticalScrollIndicator={false}>
                        <Today />
                    </Tabs.ScrollView>
                </Tabs.Tab>
                <Tabs.Tab name="Month">
                    <Tabs.ScrollView showsVerticalScrollIndicator={false}>
                        <Month />
                    </Tabs.ScrollView>
                </Tabs.Tab>
            </Tabs.Container>
            {/* </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.primary,
    },
    header:{
        backgroundColor:COLORS.white,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        alignItems:'center'
    },
    imgIcon:{
        height:50,
        width:50,
    },
    attendence:{
        fontFamily:'Poppins-SemiBold',
        fontSize:16,
        color:COLORS.black
    },
});

export default VisitScreen;