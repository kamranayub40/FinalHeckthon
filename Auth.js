import React, {createContext,useState,Children } from 'react'
import auth from '@react-native-firebase/auth'
import Navigation from './navigation';
import { useLinkProps } from '@react-navigation/native';
export const AuthContext=createContext();
 const AuthProvider=({children})=>{
    const[user,setUser]=useState()
    return(
        <AuthContext.Provider
            value={{
                user,
                setUser,
                
                login:async(email,password)=>{
                    try{
                     const doLogin= await  auth().signInWithEmailAndPassword(email,password)
                      if(doLogin.user){
                         props.navigator.navigate('Home')
                      }
                    }  
                    catch(e){
                        console.log(e);
                    }
                },
                comapnylogin:async(companyemail,companypassword)=>{
                    try{
                      await  auth().signInWithEmailAndPassword(companyemail,companypassword)
                    } catch(e){
                        console.log(e);
                    }
                },
                adminlogin:async(adminemail,adminpassword)=>{
                    try{
                      await  auth().signInWithEmailAndPassword(adminemail,adminpassword)
                    } catch(e){
                        console.log(e);
                    }
                },
                 userregister:async(email,password)=>{
                    try{
                        const doRegister=await auth().createUserWithEmailAndPassword(email, password);
                    
                        if(doRegister.user){
                            Navigation.navigate('Home')
                        }
                    
                    
                    }catch(e){
                        console.log(e)

                    }
                },
                
                 Companygister:async(companyemail,companypassword)=>{
                    try{
                        await auth().createUserWithEmailAndPassword(companyemail, companypassword);
                    }catch(e){
                        console.log(e)

                    }
                },
                
                 adminregister:async(adminemail,adminpassword)=>{
                    try{
                        await auth().createUserWithEmailAndPassword(adminemail, adminpassword);
                    }catch(e){
                        console.log(e)

                    }
                },
                logout:async()=>{
                    try{
                        await auth().signOut();
                    }catch(e){
                        console.log(e)
                    }
                }

            }}
            >
                {children}
            

            

        </AuthContext.Provider>
    )
}
export default AuthProvider