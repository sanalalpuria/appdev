import React from 'react';
import { Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Register from './screens/Register';
import Order from './screens/Order';
import Starters from './screens/Starters';
import Main from './screens/Main';
import Deals from './screens/Deals';
import CartButton from "./components/CartButton"
import ForgetPassword from './screens/ForgetPassword';
import { useSelector } from 'react-redux';


  


export default function App() {
    const user = useSelector((state) => state.AuthReducers.user);
 
    
          
       
    return (
        <NavigationContainer>
         
           
            
               
                 {user ? (
        <Stack.Navigator>
               
                <Stack.Screen
                    name="ForgetPassword"
                    component={ForgetPassword}
                    options={{ title: 'Forgot Password' }}
                />
                <Stack.Screen
                    name="Order"
                    component={Order}
                    options={
                        ({ route, navigation }) => {
                            return {
                                headerTitle: 'Order',
                                headerRight: () => <CartButton navigation={navigation} />
                            }//end return
                        }//end callback
                    }//end options
                />
                <Stack.Screen
                    name="Starters"
                    component={Starters}
                    options={{ title: 'Starters' }}
                />
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{ title: 'Main' }}
                />
                <Stack.Screen
                    name="Deals"
                    component={Deals}
                    options={{ title: 'Deals' }}
                />
                 </Stack.Navigator>
      ) :
       (
        <Stack.Navigator>
             <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{ title: 'Create Account' }}
                />
           <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Login' }}
                />
        </Stack.Navigator>
      )}
        </NavigationContainer>
    );
    //export default App;
}
