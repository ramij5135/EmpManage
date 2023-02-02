import React, { useState } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import Inputs from '../../components/inputs';
import PlacePicker from '../../components/PlacePicker';
const EditProfileScreen = ({route}) => {
    console.log('route=========>',route.params?.profileData.City);
    const [text,setText]=useState(route.params?.profileData.City)
    // console.log('text======>',text);
    return (
        <ScrollView keyboardShouldPersistTaps='handled' >
          <PlacePicker />
          <PlacePicker />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});
export default EditProfileScreen;

// import React from 'react';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// console.log();
// const EditProfileScreen = () => {
//     const getLoc=(data,details)=>{
//         console.log('details======>',details);
//     }
//   return (
//     <GooglePlacesAutocomplete
//       placeholder='Search'
//       onPress={getLoc}
//       fetchDetails={true}
//       query={{
//         key: 'AIzaSyD6WfSwXXdRhyMtTgLU9KY1XGnMdiOcbek',
//         language: 'en',
//       }}
//     />
//   );
// };

// export default EditProfileScreen;