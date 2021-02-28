import React, { useContext,useState,useEffect } from 'react'
import {NavigationContainer } from '@react-navigation/native'
import Navigation from '../config/navigation'
import {AuthContext}  from '../config/Auth'
import AppStack from '../config/AppStak'
import AppStackAdmin from '../config/AppStackAdmin'

import auth from '@react-native-firebase/auth'
import AppStackCompany from '../config/AppStackCompany'
const Routes=()=>{
    const {user, setUser}=useContext(AuthContext)
    const[intializing,setInitializing]=useState(true)
    const onAuthStateChanged=(user)=>{
    setUser(user);
    console.log('log',user)
    if(intializing)setInitializing(false)

  }
    useEffect(()=>{
    const subscriber=auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber

  },[])
  if(intializing)return null;
  // function handel(){
  //   if(user.uid?{user})
  // }
  
    return(
        <NavigationContainer>
           {/* {user ?<AppStack/>: <Navigation/>}
           {user ?<AppStackCompany/>: <Navigation/>} */}

           {/* {user ?<AppStackAdmin/>: <Navigation/>} */}

           {user ?(<AppStackCompany/>,<AppStackAdmin/>,<AppStack/>):( 
           <Navigation/>)}
        </NavigationContainer>
    )
    }
    export default Routes