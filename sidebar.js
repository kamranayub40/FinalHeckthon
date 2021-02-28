import React ,{useEffect,useState,useContext}from 'react'
import {View,Text,styleSheet,Image} from 'react-native'
import {DrawerNavigationItem} from '@react-navigation/drawer'
// import Navigation from './Navigation'
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'
import { Avatar } from 'react-native-paper';
import {AuthContext} from '../config/Auth'
import firestore from '@react-native-firebase/firestore';



function Sidebar(props){
    const {user,logout}=useContext(AuthContext)
    const [post ,setPost]=useState(null)
    const [loading ,setloading]=useState(true)
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                // const list=[]
                await firestore()
                .collection('Users')
                .get()
                // .then((querySnapshot)=>{
                //     querySnapshot.forEach(doc=>{
                //         const {postimg}=doc.data()
                //         // list.push({
                //             // Name:Name,
                //             // FatherName:FatherName,
                //             postimg:postimg
                //         // })
                //     })
                // })
                .then((image)=>{
                
                    const postimg=image.data()
                    console.log(image)
                    setPost(postimg)
                  })
                // setPost(postimg)
                if(loading)[
                    setloading(false)
                ]
                console.log('product',list)
            }catch(e){
                console.log(e)
            }
            // console.log(list)
        }
        fetchData();

    },[])
    return(

        <DrawerContentScrollView {...props}>
            <View>
            {/* <Avatar.Image size={100} style={{marginLeft:30}} source={require('../config/avtar.png')} /> */}
            {post && (
      <Image
        source={{ uri: post }}
        style={ { width: 150, height: 100 } }
      />
    )}
            </View>
           
           <DrawerItemList {...props}/>

        </DrawerContentScrollView> 

    )

   
    
}
export default Sidebar