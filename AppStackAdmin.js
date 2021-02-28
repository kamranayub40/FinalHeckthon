import React, { useContext } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator,drawerLabel } from '@react-navigation/drawer';
import Sidebar from '../components/sidebar'
// import Sidebar from '../components/sidebar'
// import AuthContext from '../config/Auth'
import {AuthContext} from './Auth'
import CompanyHome from '../components/CompanyHome'
import CompanyProfile from '../components/CompanyProfile'
import StudentDetail from '../components/StudentDetail'
import Vecancy from '../components/Vecany'
import AdminHome from '../components/AdminHome'
import CompanyDetail from '../components/ComapnyDetail'
import Vecencies from '../components/Vecencies'
// const Stack=createStackNavigator()
const Drawer = createDrawerNavigator();
const navigationhandel=()=>({

    headerShown: false
  }
)
const AppStackAdmin=()=>{
  const {logout}=useContext(AuthContext)
  // const {user}=useContext(AuthContext)

    return(

    // <Stack.Navigator>
    //     <Stack.Screen options={navigationhandel} name="Home" component={Home}/>
    // </Stack.Navigator>
    <Drawer.Navigator drawerContent={props=><Sidebar {...props}/>}>
        {/* drawerContent={props=><Sidebar {...props}/>} */}
         
       
    <Drawer.Screen name="AdminHome" component={AdminHome}  />
    <Drawer.Screen name="CompanyDetail" component={CompanyDetail}  />
    <Drawer.Screen name="StudentDetail" component={StudentDetail}  />
    <Drawer.Screen name="Vecencies " component={Vecencies }  />


    <Drawer.Screen name="logout" component={logout}/>
    

    
   






  </Drawer.Navigator>
    )

}
export default AppStackAdmin