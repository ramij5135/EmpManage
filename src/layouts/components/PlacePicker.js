import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
console.log();
const PlacePicker = ({getCurrentLocation}) => {
    const getLoc=(data,details)=>{
        console.log('details=======>',details);
        const address =details.formatted_address;
        const lat =details.geometry.location.lat;
        const lang =details.geometry.location.lng;
        getCurrentLocation(address,lat,lang)
    }
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
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