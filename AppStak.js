import React, { useContext } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator,drawerLabel } from '@react-navigation/drawer';
import Sidebar from '../components/sidebar'
// import Sidebar from '../components/sidebar'
// import AuthContext from '../config/Auth'
import Home from '../components/Home'
import Profile from '../config/Profile'
import {AuthContext} from '../config/Auth'
import FormButton from '../config/formbutton'
import Vecancies from '../components/Vecencies'
// const Stack=createStackNavigator()
const Drawer = createDrawerNavigator();
const navigationhandel=()=>({

    headerShown: false
  }
)
const AppStack=()=>{
  const {logout}=useContext(AuthContext)
  // const {user}=useContext(AuthContext)

    return(

    // <Stack.Navigator>
    //     <Stack.Screen options={navigationhandel} name="Home" component={Home}/>
    // </Stack.Navigator>
    <Drawer.Navigator drawerContent={props=><Sidebar {...props}/>}>
        {/* drawerContent={props=><Sidebar {...props}/>} */}
         
       
    <Drawer.Screen name="Home" component={Home}  />
    <Drawer.Screen name="Profile" component={Profile}  />
    <Drawer.Screen name="Vecancies" component={Vecancies}  />

    <Drawer.Screen name="logout" component={logout}/>
    

    
   






  </Drawer.Navigator>
    )

}
export default AppStack  