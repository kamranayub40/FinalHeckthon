import React, { useContext } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator,drawerLabel } from '@react-navigation/drawer';
import Sidebar from '../components/sidebar'
// import Sidebar from '../components/sidebar'
// import AuthContext from '../config/Auth'
import {AuthContext} from '../config/Auth'
import CompanyHome from '../components/CompanyHome'
import CompanyProfile from '../components/CompanyProfile'
import StudentDetail from '../components/StudentDetail'
import Vecancy from '../components/Vecany'
// const Stack=createStackNavigator()
const Drawer = createDrawerNavigator();
const navigationhandel=()=>({

    headerShown: false
  }
)
const AppStackCompany=()=>{
  const {logout}=useContext(AuthContext)
  // const {user}=useContext(AuthContext)

    return(

    // <Stack.Navigator>
    //     <Stack.Screen options={navigationhandel} name="Home" component={Home}/>
    // </Stack.Navigator>
    <Drawer.Navigator drawerContent={props=><Sidebar {...props}/>}>
        {/* drawerContent={props=><Sidebar {...props}/>} */}
         
       
    <Drawer.Screen name="CompanyHome" component={CompanyHome}  />
    <Drawer.Screen name="CompanyProfile " component={CompanyProfile }  />
    <Drawer.Screen name="StudentDetail" component={StudentDetail}  />
    <Drawer.Screen name="Vecancy" component={Vecancy}  />


    <Drawer.Screen name="logout" component={logout}/>
    

    
   






  </Drawer.Navigator>
    )

}
export default AppStackCompany