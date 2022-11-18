import React, { useState } from 'react'

import { Button, view, Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
const VicheleScreen = () => {
  const [address, setaddress] = useState()

  const [count, setCount] = useState(1)
  // const [Location, setLocation] = useState({

  //   lat: '',
  //   long: '',
  //   latitudeDelta:'',
  //   longitudeDelta:''
  // })
  Geocoder.init("AIzaSyD6WfSwXXdRhyMtTgLU9KY1XGnMdiOcbek");

  Geolocation.getCurrentPosition(info => {
    
    Geocoder.from(info.coords.latitude,info.coords.longitude)
		.then(json => {
			var location = json.results[0].formatted_address;
			console.log('location======',location);
      setaddress(location)
		})
		.catch(error => console.log('error============>',error));

  })
 
    // const [Location, setLocation] = useState({

    // })
    // setLocation(
    //   {
    //     lat: info.coords.latitude,
    //   long: info.coords.longitude,
    //   latitudeDelta: 0.0922,
    //   longitudeDelta: 0.0421,
    //   }
    // )
  //   Geocoder.init("AIzaSyCMPzkJWoDMPqYEcnt1OOuOJBoJ1YyYpjQ")
  //   Geocoder.from(info.coords.latitude,info.coords.longitude)
	// 	.then(json => {

	// 		var location = json.results[0].geometry.location;
	// 		console.log(location);
	// 	})
	// 	.catch(error => console.warn(error));
  // })
  // // const getData=()=>{
  // //   Geocoder.init("AIzaSyCMPzkJWoDMPqYEcnt1OOuOJBoJ1YyYpjQ")
  // // }

  return (
    <>
    <Text>{address}</Text>
      {/* {count < 10 ? <Text>SW_00{count}</Text>
        :
        count >= 10 && count < 100 ? <Text>SW_0{count}</Text> :
          count >= 100 ? <Text>SW_{count}</Text> : null

      }


      <TouchableOpacity
        onPress={() => setCount(count + 1)
        }
      >

        <Text>click</Text>
      </TouchableOpacity> */}
    </>
  )
}
// const styles=StyleSheet.create({
//     container:{

//     }
// })
export default VicheleScreen;       
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import DropeDown from '../../components/DropeDown';
// import axios from "axios";
// const VichelScreen = () => {
//   const [value, setValue] = useState(null);
//   const [isFocus, setIsFocus] = useState(false);
//   const [statedata, setStatedata] = useState([]);
//   const [citydata, setCitydata] = useState([]);
//   console.log('cit===',citydata);
//   useEffect(() => {
//     var axios = require('axios');

//     var config = {
//       method: 'get',
//       url: 'https://demo38.gowebbi.in/api/RegisterApi/FetchState',
//     };
//     axios(config)
//       .then(function (response) {
//         // console.log(JSON.stringify(response.data.data));
//         var count = Object.keys(response.data.data).length;
//         let countArray = [];
//         // console.log('count=======>', count);
//         for (var i = 0; i < count; i++) {
//           countArray.push({
//             value: response.data.data[i]?.id,
//             label: response.data.data[i]?.state
//           })
//           // console.log('response.data[i].id=====',response.data.data[i]?.state)
//         }
//         setStatedata(countArray)

//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }, [])
  
//   return (
//     <View style={styles.container}>
//       <DropeDown setCitydata={setCitydata} stateData={statedata}  
//        />
//        <DropeDown stateData={citydata}  
//        />

//       {/* <Dropdown
//         style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
//         placeholderStyle={styles.placeholderStyle}
//         selectedTextStyle={styles.selectedTextStyle}
//         inputSearchStyle={styles.inputSearchStyle}
//         iconStyle={styles.iconStyle}
//         data={statedata}
//         search
//         maxHeight={300}
//         labelField="label"
//         valueField="value"
//         placeholder={!isFocus ? 'Select item' : '...'}
//         searchPlaceholder="Search..."
//         value={statedata}
//         onFocus={() => setIsFocus(true)}
//         onBlur={() => setIsFocus(false)}
//         onChange={item => {
//           setValue(item.value);
//           handlArray(item.value)
//           console.log('item value===========', item.value);
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
//       <Dropdown
//         style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
//         placeholderStyle={styles.placeholderStyle}
//         selectedTextStyle={styles.selectedTextStyle}
//         inputSearchStyle={styles.inputSearchStyle}
//         iconStyle={styles.iconStyle}
//         data={citydata}
//         search
//         maxHeight={300}
//         labelField="label"
//         valueField="value"
//         placeholder={!isFocus ? 'Select item' : '...'}
//         searchPlaceholder="Search..."
//         value={citydata}
//         onFocus={() => setIsFocus(true)}
//         onBlur={() => setIsFocus(false)}
//         onChange={item => {
//           setValue(item.value);
//           console.log('item===========', item.value);
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
//       /> */}
//     </View>
//   );
// };

// export default VichelScreen;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     padding: 16,
//     marginVertical: 15,

//   },
//   dropdown: {
//     height: 50,
//     borderColor: 'gray',
//     borderWidth: 0.5,
//     borderRadius: 8,
//     paddingHorizontal: 8,
//     marginBottom: 20
//   },
//   icon: {
//     marginRight: 5,
//   },
//   label: {
//     position: 'absolute',
//     backgroundColor: 'white',
//     left: 22,
//     top: 8,
//     zIndex: 999,
//     paddingHorizontal: 8,
//     fontSize: 14,
//   },
//   placeholderStyle: {
//     fontSize: 16,
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//   },
// });