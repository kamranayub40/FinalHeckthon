import React, { useContext, useState } from 'react'
import {View,Text,Button,StyleSheet,TouchableOpacity, Image} from 'react-native'
import { colors, Icon } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'
import Forminput from '../config/formInput'
import FormButton from '../config/formbutton'
import { AuthContext } from '../config/Auth'


function CompanyAccount(props){
    const[companyemail,setcompanyemail]=useState('')
    const[companypassword,setcompanypassword]=useState()
    const{ Companygister}=useContext(AuthContext)

    return(
        <>
        <View style={styles.container}>
            {/* <Image
            source={require('../images/logo.png')}
            style={styles.logo}
            /> */}
            <Text style={styles.text}>Wellcome to Company Account</Text>
            {/* <TextInput
            Value={email}
            onchangeText={(email)=>setEmail(email)}
            style={{borderWidth:2}}
            /> */}
            <Forminput
            labelValue={companyemail}
            onChangeText={(text)=>setcompanyemail(text)}
            placeholderText="Email"
            iconType="user"
            keyboardType="email-address "
            autoCaptalize="none"
            autoCorrect={false}

            />
            <Forminput
            labelValue={companypassword}
            onChangeText={(userpassword)=>setcompanypassword(userpassword)}
            placeholderText="password"
            iconType="lock"
            keyboardType="email-address "
            autoCaptalize="none"
            secureTextEntry={true}
            />
            <FormButton
            buttonTitle="SignUp"
            onPress={()=> Companygister(companyemail,companypassword)} />
            {/* <Button title="signUp"
            onPress={()=>console.log(email)}/> */}
         
        </View>
        <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>By  Registring ,you confirm that you accept our </Text>
            <TouchableOpacity onPress={()=>alert("Terms clicked")}><Text style={[styles.color_textPrivate,{color:"red"}]}>Terms and services</Text></TouchableOpacity>
            <Text style={[styles.color_textPrivate,{color:"red"}]}>and</Text>
            <Text style={[styles.color_textPrivate,{color:"red"}]}>privacy policy</Text>


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
    
    text:{
        fontFamily:"kufan-SemiBoldItalic",
        fontSize:20,
        marginBottom:10,
        color:"black"
    },
    navButton:{
        marginTop:2,
        

    },
    
    navButtonText:{
        fontSize:18,
        fontWeight:'500',
        color:"white",
        fontFamily:"lato-regular"
    },
    textPrivate:{
        flexDirection:"row",
        flexWrap:"wrap",
        marginVertical:35,
        justifyContent:"center"
    },
    color_textPrivate:{
        fontSize:14,
        fontWeight:"400",
        fontFamily:"Lato-regular",
        color:"grey"
    }

})

export default CompanyAccount
//         <View >

//     <TouchableOpacity style={{borderWidth:1,felx:1,top:6,flexDirection:'row',backgroundColor:'teal'}}>
//     <View style={{textAlign:'center',marginLeft:60,flexDirection:'row',flex:1,color:"white"}}>
//         <TouchableOpacity onPress={()=>props.navigation.navigate("Home")}> 
//         <Icon size={29}
//   name='rowing' />
//         </TouchableOpacity>
   
//         <Text style={{fontSize:30,marginLeft:70,color:"white"}}>LOGIN</Text>
//         </View>
//   </TouchableOpacity>
//       <View style={styles.form}>
//           <TextInput style={styles.formInput}  placeholder="Enter your Email"/>
//           <TextInput style={styles.formInput}  placeholder="Enter your password"/>
//           <Button title="Login"/>
//           <Text style={{textAlign:"center"}}>Are You New?<TouchableOpacity style={{borderRadius:4,borderWidth:2,marginBottom:4,backgroundColor:"darkblue"}} onPress={()=>props.navigation.navigate("signup")}><Text style={{color:"white"}}>SIGNUP</Text></TouchableOpacity></Text>



//       </View>
//       </View>