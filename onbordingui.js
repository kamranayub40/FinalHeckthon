import React from 'react'
import {View,Text,Button,TouchableOpacity,Image} from 'react-native'
// import { AntDedign } from 'react-native-vector-icons'
import Onboarding from 'react-native-onboarding-swiper';
// import { IconFill, IconOutline } from "@ant-design/icons-react-native";


function onbordingui(props){
    return(
        
        <Onboarding
        onSkip={()=>props.navigation.navigate("MainPage")}
        onDone={()=>props.navigation.navigate("MainPage")}

        pages={[
          {
            backgroundColor: 'teal',
            image: <Image source={require('../images/onb6.jpg')} />,
            title: 'SYLANI C R S',
          },
          {
            backgroundColor: 'teal',
            image: <Image source={require('../images/onb7.jpg')} />,
            title: 'SYLANI C R S',
          },
          {
            backgroundColor: 'gray',
            image: <Image source={require('../images/ob8.jpg')} />,
            title: 'SYLANI C R S',
          },
          {
            backgroundColor: 'grey',
            image: <Image source={require('../images/ob9.jpg')} />,
            title: 'KhapalShop',
          },
        
        ]}
      />
    )
}
export default onbordingui