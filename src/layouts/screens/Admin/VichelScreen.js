import React, { useState } from 'react'
import { Button, view, Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import DeviceInfo from 'react-native-device-info';
const VicheleScreen = () => {
    const [deviceId, setdeviceId] = useState()
    const getDvicedId = () => {
       DeviceInfo.getUniqueId().then((res)=>{
            console.log('res',res);
            setdeviceId(res)
        })
        // console.log('uniqueId=======', uniqueId);
        // setdeviceId(uniqueId)
    }
   

    const orderId = () => {
        var S4 = () => {
          return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
setdeviceId(S4)
        return (
          S4() +
          S4() +
          "-" +
          S4() +
          "-" +
          S4() +
          "-" +
          S4() +
          "-" +
          S4() +
          S4() +
          S4()
        );
      };
    //   const random=()=>{

    //     let x = Math.floor((Math.random()) + 1);
    //     return (

    //         <>
    //         </>

    //     )
        
    //   }
      const [count,setCount]=useState(1)
      
    return (
        <>
            
       
                   { count<10?<Text>SW_00{count}</Text>
                   :
                count>=10 && count<100?<Text>SW_0{count}</Text>:
                count>=100?<Text>SW_{count}</Text>:null
                
                }
                

            <TouchableOpacity
                onPress={() => setCount(count + 1)
                }
            >

                <Text>click</Text>
            </TouchableOpacity>
        </>
    )
}
// const styles=StyleSheet.create({
//     container:{

//     }
// })
export default VicheleScreen;       