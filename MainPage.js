import React,{useContext, useEffect, useState} from 'react'
import {View,Image,Text,Button,TouchableOpacity, FlatList,StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements'
import {AuthContext} from '../config/Auth'
import FormButton from '../config/formbutton'
import firestore from '@react-native-firebase/firestore';

// import { Card } from 'react-native-paper';

// const  Card=()=>{
//     return(

        
//         )
// }
function MainPage(props){
    const {user,logout}=useContext(AuthContext)
    const [post ,setPost]=useState(null)
    const [loading ,setloading]=useState(true)

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
        <View>
        {/* <Image
            source={require('../images/logo.png')}
            style={styles.logo}
            /> */}
            <Text style={styles.text}>WELLCOME</Text>

            <Text style={styles.text}>CAMPUS RECUITMENT SYSTEM</Text>
           
        </View>
       
          <View style={{top:250,marginBottom:5}}>


        <FormButton
            buttonTitle="STUDENT"
            onPress={()=> props.navigation.navigate("Login")}

            />
            <FormButton
            buttonTitle="COMPANY"
            onPress={()=> props.navigation.navigate("CompanyLogin")}

            />
            <FormButton
            buttonTitle="ADMIN"
            onPress={()=> props.navigation.navigate("AdminLogin")}
            
            />
            </View>
          
          </>

    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:20
    },
    logo:{
        height:150,
        width:150,
        resizeMode:"cover"
    },
    text:{
        fontFamily:"kufan-SemiBoldItalic",
        fontSize:20,
        marginBottom:10,
        color:"black",
        top:150,
        textAlign:"center"
        
    },
    navButton:{
        marginTop:2,
        

    },
    forgotButton:{
        marginVertical:10
    },
    navButtonText:{
        fontSize:18,
        fontWeight:'500',
        color:"white",
        fontFamily:"lato-regular"
    }
})
export default MainPage