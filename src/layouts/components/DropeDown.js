import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
const DropdownComponent = ({stateData,setCitydata }) => {
    
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const handlArray = (stateCode) => {
    console.log('stateCode=============>tgggggg', stateCode);
    // console.log('text=====',text)
    var axios = require('axios');

    var config = {
      method: 'get',
      url: `https://demo38.gowebbi.in/api/RegisterApi/FetchCity?SID=${stateCode}`,
      headers: {
        'X-CSCAPI-KEY': 'API_KEY'
      }
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // console.log('response.data.city=====',response.data.data);

        var count = Object.keys(response.data.data).length;
        let cityArray = [];
        console.log('count=======>', count);
        for (var i = 0; i < count; i++) {
          cityArray.push({
            value: response.data.data[i]?.id,
            label: response.data.data[i]?.city

          })
          // console.log('response.data[i].id=====',response.data.data[i]?.state)
        }
        setCitydata(cityArray)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <View style={styles.container}>
      
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={stateData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item, e) => {
          setValue(item.value);
         
          
            handlArray(item.value)
        
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});