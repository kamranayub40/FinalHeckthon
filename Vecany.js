import React,{useState,useContext} from 'react'
import { TextInput,Picker,Image,Animatable,StyleSheet,ActivityIndicator,TouchableOpacity,Text, Alert,Button, View,ScrollView, ImagePickerIOS, Platform } from 'react-native'
// import database from '@react-native-firebase/database'
// import storage from '@react-native-firebase/storage';
// import ImagePicker from 'react-native-image-crop-picker'
import firestore from '@react-native-firebase/firestore'
// import {AuthContext} from './Auth'
// export const Addimage=()=>{
// chooseImage = () => {
//     let options = {
//       title: 'Select Image',
//       customButtons: [
//         { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
//       ],
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//   }
// }
const Vecancy=()=>{
    const[CompanyName,setCompanyName]=useState()
    const[JobName,setJobName]=useState()

    const[lastDate,setLastDate]=useState()
    const[nbr,setNbr]=useState()

    // const[itemName,setImage]=useState()
    const[perminentAddress,setperminentAddress]=useState()
    // const [selectedValue, setSelectedValue] = useState();

    // const[image,setImage]=useState(null)
    const[uploading,setUploading]=useState(false)
    const[transfered,setTransfered]=useState(0)
    // const {user,logout}=useContext(AuthContext)
    
    // const[Category,setCategory]=useState()
// const upload= async()=>{
//   const uploaduri=image;
//   let filename=uploaduri.substring(uploaduri.lastIndexOf('/')+1)
//   setUploading(true)
//   setTransfered(0)
//   const task=storage().ref(filename).putFile(uploaduri)
//   task.on('state_changed', taskSnapshot => {
//     console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
//     setTransfered(
//       Math.round(taskSnapshot.bytesTransferred/taskSnapshot.totalBytes )* 100
//     )
//     console.log(transfered)
//   });
//   try{
//     await task
//     setUploading(false)
//     Alert.alert("Successfully submit :)")
//   } catch(e){
//     console.log(e)
//   }
//   setImage(null)
// }
const send=async()=>{
//   const imageUrl=await UploadPost()
//   console.log("image Url",imageUrl)
firestore()
.collection('Vecancy')
.add({
//   user:user.uid,
  CompanyName:CompanyName,
  JobName:JobName,
  lastDate:lastDate,
  nbr:nbr,
  perminentAddress:perminentAddress
 
})
.then(()=>{
  Alert.alert("Submitted succesfully")
})
.catch((error)=>{
  console.log("some thing went wrong",error)
})
}
// // const Choose=()=>{
// //   // const array=[]

// //   ImagePicker.openPicker({
// //     width:150,
// //     height:100,
// //     cropping:true,
// //     // multiple:true,
// //     // waitAnimationEnd:false,
// //     // includeExif:true,
// //     // forceJpg:true,
// //     // compressImageQuality:0.8,
// //     // maxFiles:10,
// //     // mediaType:'any',
// //     // includeBase64:true

// //   })
// //   // .then(response=>{
// //   //   console.log("acahan pya:",response)
// //   //   response.map(image=>{
// //   //     array.push({

// //   //     })
// //   //   })
// //   //   setImage(imageUrl)
// //   // })
// //   .then((image)=>{
// //     const imageUrl=Platform.os=='ios'?image.sourceURL:image.path
// //     console.log(image)
// //     setImage(imageUrl)
// //   })
// // }
//     const UploadPost= async()=>{
//         let product={
//           Name:Name,
//           FatherName:FatherName,
//           Nic:Nic,
//           Qualification:Qualification,
//           nbr:nbr,
//           perminentAddress:perminentAddress,
//           Marks:Marks,
//           selectedValue:selectedValue,
            
//         }
//         database().ref('/').child('product').push(product)
//         console.log(product)
//         // const uploaduri=image;
// //   let filename=uploaduri.substring(uploaduri.lastIndexOf('/')+1)
// //   const extension=filename.split('.').pop()
// //   const name=filename=filename.split('.').slice(0,-1).join('.');
// // filename=name+Date.now()+'.'+extension
//   setUploading(true)
//   setTransfered(0)
// //   const storageref=storage().ref('photos/${filename}');
//   // const task=storage().ref(filename).putFile(uploaduri)
// //   const task=storageref.putFile(uploaduri)
//   task.on('state_changed', taskSnapshot => {
//     console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
//     setTransfered(
//       Math.round(taskSnapshot.bytesTransferred/taskSnapshot.totalBytes )* 100
//     )
//     console.log(transfered)
//   });
//   try{
//     // await task

//     // const url= await storageref.getDownloadURL()


//     setUploading(false)
//     Alert.alert("succesfully Submit")
//     return url
//   } catch(e){
//     console.log(e)
//     return null
//   }
//   setImage(null)

//     }

    return(
        <>
         <ScrollView  behaviour = "height"
                keyboardVerticalOffset = {64}
                style= {{ marginTop: '2%',}}>
        <TextInput value={CompanyName} onChangeText={(CompanyName)=>setCompanyName(CompanyName)} placeholder="Enter Company Name" style={styles.input}/>
        <TextInput value={JobName} onChangeText={(JobName)=>setJobName(JobName)} placeholder="Enter Job Name" style={styles.input}/>
        <TextInput value={lastDate} onChangeText={(lastDate)=>setLastDate(lastDate)} placeholder="Enter lastDate(dd/mm/yyyy)" style={styles.input}/>
        <TextInput value={nbr} onChangeText={(nbr)=>setNbr(nbr)} placeholder="Enter your HR Nbr" style={styles.input}/>
        <TextInput value={perminentAddress} onChangeText={(perminentAddress)=>setperminentAddress(perminentAddress)} placeholder="Enter Company Address" style={styles.input}/>
        
        {/* <Animatable.View animation='fadelist' duration={500}>


        <Text>name input must</Text>
        </Animatable.View> */}
        {/* <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Province" value="0" />
        <Picker.Item label="Sindh" value="Sindh" />
        <Picker.Item label="Punjab" value="Punjab" />
        <Picker.Item label="KPK" value="KPK" />
        <Picker.Item label="Balochistan" value="balochistan" />
        <Picker.Item label="AJK" value="AJK" />

      </Picker>
      


    </View> */}
    <View style={styles.textPrivate}>
       
          {/* <TouchableOpacity style={{alignItems:'center',justifyContent:"center",flex:1}} onPress={Choose}><Text style={{borderWidth:1,borderRadius:25,marginBottom:5,textAlign:"center"}}>Choose Image</Text></TouchableOpacity> */}
            {/* <TextInput style={{borderWidth:1,width:270,borderRadius:25}}placeholder="image"/> */}
            {/* {
           upload ?Alert.alert(<><Text>{transfered}% complte</Text>
            <ActivityIndicator /></>)
           :( */}

            {/* <TouchableOpacity onPress={upload}><Text style={[styles.color_textPrivate,{color:"grey"}]}>Upload</Text></TouchableOpacity> */}
           {/* )} */}


        </View>
        {/* <Text>

        {image != null ?<Text source={{uri:image}}/>:null}
        </Text> */}
         {/* <View >
    {image && (
      <Image
        source={{ uri: image }}
        style={ { width: 150, height: 100 } }
      />
    )}
    </View> */}
    {uploading?(

      <Text>{transfered}% completed, 
      <ActivityIndicator size="large" color="teal"/>
      </Text>
      
    ):
        <Button title="Submit" onPress={send} />
}
    
    
      </ScrollView>

        </>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 4,
    // alignItems: "center",
    borderWidth:1,
    borderRadius:25,
    marginBottom:5
  },  
  input: {
        borderWidth:1,
        borderRadius:25,
        margin:5
    },
    textPrivate:{
      flexDirection:"row",
      flexWrap:"wrap",
      // marginVertical:35,
      // justifyContent:"center"
  },
  color_textPrivate:{
      // fontSize:14,
      // fontWeight:"400",
      // fontFamily:"Lato-regular",
      // color:"grey",
      borderWidth:1,
      borderRadius:5,
      top:15
  }
  });
export default Vecancy