import React,{useContext, useEffect, useState} from 'react'
import {View,Image,Text,Button,TouchableOpacity, FlatList} from 'react-native'
import { Icon } from 'react-native-elements'
import {AuthContext} from '../config/Auth'
import FormButton from '../config/formbutton'
// import firestore from '@react-native-firebase/firestore';
// import { Card } from 'react-native-paper';

// const  Card=()=>{
//     return(

        
//         )
// }
function CompanyHome(props){
    const {user,logout}=useContext(AuthContext)
    // const [post ,setPost]=useState(null)
    // const [loading ,setloading]=useState(true)

    // useEffect(()=>{
    //     const fetchData=async()=>{
    //         try{
    //             const list=[]
    //             await firestore()
    //             .collection('Users')
    //             .get()
    //             .then((querySnapshot)=>{
    //                 querySnapshot.forEach(doc=>{
    //                     const {Name,FatherName,postimg}=doc.data()
    //                     list.push({
    //                         Name:Name,
    //                         FatherName:FatherName,
    //                         postimg:postimg
    //                     })
    //                 })
    //             })
    //             setPost(list)
    //             if(loading)[
    //                 setloading(false)
    //             ]
    //             console.log('product',list)
    //         }catch(e){
    //             console.log(e)
    //         }
    //         // console.log(list)
    //     }
    //     fetchData();

    // },[])
    // console.log(list)
    return(
        <>
        <View >

        <TouchableOpacity style={{borderWidth:1,felx:1,top:6,flexDirection:'row',backgroundColor:'purple'}}>
        <View style={{textAlign:'center',marginLeft:60,flexDirection:'row',flex:1,color:"white"}}>
            <TouchableOpacity onPress={()=>props.navigation.openDrawer()}> 
            <Icon size={29} color="white"
      name='rowing' />
            </TouchableOpacity>
       
            <Text style={{fontSize:30,marginLeft:80,color:"white"}}>Company</Text>
            </View>
      </TouchableOpacity>
          </View>
          {/* <Text>{user.FullName}</Text> */}
          {/* <FormButton
            buttonTitle="Logout"
            onPress={()=>logout()} /> */}
          

           <FormButton
            buttonTitle="Logout"
            onPress={()=>logout()} />
          
          </>

    )
}
export default CompanyHome