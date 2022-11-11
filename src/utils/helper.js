import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {baseURL} from './config';
import NetInfo from '@react-native-community/netinfo';

export const storeData = async data => {
    try {
        await AsyncStorage.setItem('user_data', JSON.stringify(data));
    } catch (error) {
        console.log('storeData err', error);
    }
};

export const getStorageData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('user_data');
        return JSON.parse(jsonValue);
    } catch (e) {
        console.log('getStorageData err', e);
    }
};

export const postMethod = async (url, body) => {
    var data = JSON.stringify({
        "EmailId": "bishnudev.swadesh@gmail.com",
        "Password": "123456"
      });
      
      var config = {
        method: 'post',
        url: 'https://demo38.gowebbi.in/api/LoginApi/Login',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
};


export const getMethod = async url => {
    try {
        let internet = await NetInfo.fetch();
        let StoredData = await getStorageData();
        const setHeader = () => {
            if (StoredData !== null) {
                return {Authorization: `Bearer ${StoredData.JWToken}`};
            }
        };

        if (internet.isInternetReachable) {
            return await axios.get(baseURL + url, {
                headers: {
                    Authorization: setHeader(),
                },
            });
        } else {
            console.log('getMethod error reason is internet =>', internet);
            return internet.isInternetReachable;
        }
    } catch (e) {
        console.log('getMethod error reason is =>', e);
        return e;
    }
};
