import React, { useState, useRef, useEffect } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
console.log();
const PlacePicker = ({ getCurrentLocation, getAddressText, setAddressText }) => {
  console.log('predefinedPlaces=====>', getAddressText);
  const getLoc = (data, details) => {
    console.log('details=======>', details);
    const address = details.formatted_address;
    const lat = details.geometry.location.lat;
    const lang = details.geometry.location.lng;
    getCurrentLocation(address, lat, lang)
  }
  const ref = useRef()
  useEffect(() => {
    ref.current.setAddressText(getAddressText)
  }, [])
  return (
    <GooglePlacesAutocomplete
      ref={ref}
      placeholder={getAddressText}
      onPress={getLoc}
      fetchDetails={true}
      query={{
        key: 'AIzaSyD6WfSwXXdRhyMtTgLU9KY1XGnMdiOcbek',
        language: 'en',
      }}

    />
  );
};

export default PlacePicker;

// import React, { useEffect, useRef } from 'react';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// const GooglePlacesInput = () => {
//   const ref = useRef();

//   useEffect(() => {
//     ref.current?.setAddressText('Some Text');
//   }, []);

//   return (
//     <GooglePlacesAutocomplete
//       ref={ref}
//       placeholder='Search'
//       onPress={(data, details = null) => {
//         // 'details' is provided when fetchDetails = true
//         console.log(data, details);
//       }}
//       query={{
//         key: 'AIzaSyD6WfSwXXdRhyMtTgLU9KY1XGnMdiOcbek',
//         language: 'en',
//       }}
//     />
//   );
// };

// export default GooglePlacesInput;