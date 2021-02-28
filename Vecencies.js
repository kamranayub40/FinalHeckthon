import React,{useContext, useEffect, useState} from 'react'
import {View,Image,Text,Button,TouchableOpacity, FlatList} from 'react-native'
import { Icon } from 'react-native-elements'
import {AuthContext} from '../config/Auth'
import FormButton from '../config/formbutton'
import firestore from '@react-native-firebase/firestore';
// import { Card } from 'react-native-paper';

// const  Card=()=>{
//     return(

        
//         )
// }
function Vecencies(props){
    const {user,logout}=useContext(AuthContext)
    const [post ,setPost]=useState(null)
    const [loading ,setloading]=useState(true)

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const list=[]
                await firestore()
                .collection('Vecancy')
                .get()
                .then((querySnapshot)=>{
                    querySnapshot.forEach(doc=>{
                        const {CompanyName,JobName,lastDate,nbr,perminentAddress}=doc.data()
                        list.push({
                           CompanyName:CompanyName,
                           JobName:JobName,
                           lastDate:lastDate,
                           nbr:nbr,
                           perminentAddress:perminentAddress

                            
                           

                        })
                    })
                })
                setPost(list)
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
        <>
        <View >

        <TouchableOpacity style={{borderWidth:1,felx:1,top:6,flexDirection:'row',backgroundColor:'purple'}}>
        <View style={{textAlign:'center',marginLeft:60,flexDirection:'row',flex:1,color:"white"}}>
            <TouchableOpacity onPress={()=>props.navigation.openDrawer()}> 
            <Icon size={29} color="white"
      name='rowing' />
            </TouchableOpacity>
       
            <Text style={{fontSize:30,marginLeft:30,color:"white"}}>Vecencies</Text>
            </View>
      </TouchableOpacity>
          </View>
          {/* <Text>{user.FullName}</Text> */}
          {/* <FormButton
            buttonTitle="Logout"
            onPress={()=>logout()} /> */}
          

          <FlatList
          style={{top:10}}
          data={post}
          renderItem={({item})=>{
              return ( 
              <View  style={{borderEndWidth:2,marginLeft:10,alignItems:"center",}}>
           
              <Text > CompanyName:{item.CompanyName}</Text>
              <Text> JobName:{item.JobName}</Text>
              <Text >LastDate:{item.lastDate}</Text>
              <Text >Nbr:{item.nbr}</Text>
              <Text >Address:{item.perminentAddress}</Text>


      
          </View>
              )
          }
        }
          keyExtractor={(item)=>item.id}
          showsVerticalScrollIndicator={false}
          />
           <FormButton
            buttonTitle="Logout"
            onPress={()=>logout()} />
          
          </>

    )
}
export default Vecencies