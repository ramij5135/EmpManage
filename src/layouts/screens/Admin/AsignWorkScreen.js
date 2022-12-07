
import React, { useState ,useEffect} from 'react'
import { Text, View,StyleSheet } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import { COLORS } from '../../../utils/globalStyles'
const  AsignWorkScreen =()=> {
  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])
  const [statedata, setStatedata] = useState([]);
  const [Work, setWork] = useState([]);
  useEffect(() => {
            var axios = require('axios');
    
            var config = {
                method: 'get',
                url: 'https://demo38.gowebbi.in/api/JobMasterApi/FetchEmployee',
            };
            axios(config)
                .then(function (response) {
                    var count = Object.keys(response.data.data).length;
                    let countArray = [];
                    for (var i = 0; i < count; i++) {
                        countArray.push({
                            id: response.data.data[i]?.id,
                            item: response.data.data[i]?.item
                        })
                    }
                    setStatedata(countArray)
                })
                .catch(function (error) {
                    console.log(error);
                });
                axios.get("https://demo38.gowebbi.in/api/JobMasterApi/GetJobMaster").then((response)=>{
                    var count = Object.keys(response.data.data).length;
                    let Work = [];
                    for (var i = 0; i < count; i++) {
                        Work.push({
                            id: response.data.data[i]?.id,
                            item: response.data.data[i]?.item
                        })
                    }
                    setWork(Work)
                }
                )
              
        }, [])
        function onMultiChange() {
            return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
          }
        
          function onChange() {
            return (val) => setSelectedTeam(val)
          }
  return (
    <View style={styles.container}>
    <View style={{backgroundColor:COLORS.White,borderRadius:14,padding:15}}>
      <SelectBox
        label="Select employee name"
        labelStyle={styles.label}
        options={statedata}
        value={selectedTeam}
        onChange={onChange()}
        hideInputFilter={false}
        selectedItemStyle={styles.selectedItemStyle}
        searchInputProps={{fontSize:20}}
        inputPlaceholder='Search'
      />
      <View />
      <SelectBox
        label="Select Job"
        labelStyle={styles.label}
        options={Work}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
        inputPlaceholder='Search'
        searchInputProps={{fontSize:20}}
        multiOptionsLabelStyle={styles.multiOptionsLabelStyle}
        multiOptionContainerStyle={{backgroundColor:'#709a9e'}}
       
      />
    </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        padding:15,
        backgroundColor:COLORS.primary,
        flex:1
    },
    selectedItemStyle:{
        fontSize:18,
        fontFamily:'Poppins-SemiBold'
    },
    label:{
        fontSize:20,
        fontFamily:'Poppins-SemiBold'
    },
    multiOptionsLabelStyle:{
       fontSize:18,
       fontFamily:'Poppins-SemiBold'
    }
})
export default AsignWorkScreen;


//       <Dropdown
//         style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
//         placeholderStyle={styles.placeholderStyle}
//         selectedTextStyle={styles.selectedTextStyle}
//         inputSearchStyle={styles.inputSearchStyle}
//         iconStyle={styles.iconStyle}
//         data={data}
//         search
//         maxHeight={300}
//         labelField="label"
//         valueField="value"
//         placeholder={!isFocus ? 'Select item' : '...'}
//         searchPlaceholder="Search..."
//         value={value}
//         onFocus={() => setIsFocus(true)}
//         onBlur={() => setIsFocus(false)}
//         onChange={item => {
//           setValue(item.value);
//           setIsFocus(false);
//         }}
//         renderLeftIcon={() => (
//           <AntDesign
//             style={styles.icon}
//             color={isFocus ? 'blue' : 'black'}
//             name="Safety"
//             size={20}
//           />
//         )}
//       />



// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { MultiSelect, Dropdown } from 'react-native-element-dropdown';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import axios from "axios"

// const data = [
//     { label: 'Item 1', value: '1' },
//     { label: 'Item 2', value: '2' },
//     { label: 'Item 3', value: '3' },
//     { label: 'Item 4', value: '4' },
//     { label: 'Item 5', value: '5' },
//     { label: 'Item 6', value: '6' },
//     { label: 'Item 7', value: '7' },
//     { label: 'Item 8', value: '8' },
// ];

// const MultiSelectComponent = () => {
//     const [selected, setSelected] = useState([]);
//     const [value, setValue] = useState(null);
//     const [isFocus, setIsFocus] = useState(false);
//     const [statedata, setStatedata] = useState([]);
//     const [Work, setWork] = useState([]);
   

//     useEffect(() => {
//         var axios = require('axios');

//         var config = {
//             method: 'get',
//             url: 'https://demo38.gowebbi.in/api/JobMasterApi/FetchEmployee',
//         };
//         axios(config)
//             .then(function (response) {
//                 var count = Object.keys(response.data.data).length;
//                 let countArray = [];
//                 for (var i = 0; i < count; i++) {
//                     countArray.push({
//                         value: response.data.data[i]?.id,
//                         label: response.data.data[i]?.item
//                     })
//                 }
//                 setStatedata(countArray)
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//             axios.get("https://demo38.gowebbi.in/api/JobMasterApi/GetJobMaster").then((response)=>{
//                 var count = Object.keys(response.data.data).length;
//                 let Work = [];
//                 for (var i = 0; i < count; i++) {
//                     Work.push({
//                         value: response.data.data[i]?.id,
//                         label: response.data.data[i]?.item
//                     })
//                 }
//                 setWork(Work)
//             }
//             )
          
//     }, [])
//     console.log('Work ======================>', Work);
// return (
//     <View style={styles.container}>
//         <Text style={styles.employeeName}>Select Employee Name</Text>

       
//         <Dropdown
//             style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
//             placeholderStyle={styles.placeholderStyle}
//             selectedTextStyle={styles.selectedTextStyle}
//             inputSearchStyle={styles.inputSearchStyle}
//             iconStyle={styles.iconStyle}
//             itemTextStyle={styles.itemText}
//             data={statedata}
//             search
//             maxHeight={300}
//             labelField="label"
//             valueField="value"
//             placeholder={!isFocus ? 'Select item' : '...'}
//             searchPlaceholder="Search..."
//             value={value}
//             onFocus={() => setIsFocus(true)}
//             onBlur={() => setIsFocus(false)}
//             onChange={item => {
//                 setValue(item.value);
//                 setIsFocus(false);
//             }}
//             // renderLeftIcon={() => (
//             //     <AntDesign
//             //         style={styles.icon}
//             //         color={isFocus ? 'blue' : 'black'}
//             //         name="Safety"
//             //         size={20}
//             //     />
//             // )}
//         />
//         <Text>Job Name</Text>
//         <MultiSelect
//             style={styles.dropdown}
//             placeholderStyle={styles.placeholderStyle}
//             selectedTextStyle={styles.selectedTextStyle}
//             inputSearchStyle={styles.inputSearchStyle}
//             iconStyle={styles.iconStyle}
//             itemTextStyle={styles.itemText}
//             itemContainerStyle={styles.itemContainer}
//             search
//             activeColor='#fff'
//             data={Work}
//             labelField="label"
//             valueField="value"
//             placeholder="Select Job"
//             searchPlaceholder="Search..."
//             value={selected}
//             onChange={item => {
//                 setSelected(item);
//             }}
//         />
//     </View>
// );
// };

// export default MultiSelectComponent;

// const styles = StyleSheet.create({
//     container: { padding: 16 },
//     dropdown: {
//         height: 50,
//         backgroundColor: 'transparent',
//         borderBottomColor: 'gray',
//         borderBottomWidth: 1,
//     },
//     placeholderStyle: {
//         fontSize: 18,

//     },
//     selectedTextStyle: {
//         fontSize: 18,
//         fontFamily:'Poppins-SemiBold'
//     },
//     inputSearchStyle: {
//         height: 40,
//         fontSize: 16,
//     },
//     selectedStyle: {
//         borderRadius: 24,
//         backgroundColor:'red'

//     },
//     employeeName:{
//         fontFamily:'Poppins-SemiBold',
//         fontSize:24
//     },
//     itemText:{
//         fontFamily:'Poppins-SemiBold',
//         fontSize:18
//     },
//     itemContainer:{
//         backgroundColor:'#639196'
//     }
// });