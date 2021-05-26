import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,
    TextInput,
    Button,
    TouchableOpacity,
    SafeAreaView,Dimensions} from 'react-native';
import  { useState } from 'react';
import logo from "../pictures/logo.png" ; 
import axios from 'axios';
const{width,height}=Dimensions.get("window");
//import {PRIMARY_COLOR,SECONDARY_COLOR,INPUT_COLOR} from "./Globals";
import styles from './styles';

export default function LoginScreen(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [name, setName] = useState("");
   
    const login = async () => {
     
      const link = "http://localhost:4000/login";
      const body = {
          
          email: email,
          password: password
      };
    //  alert("done");
    //  console.log("h");
      try{
          const response = await axios.post(link, body);
         // const { data } = response.data;
          console.log('Success result: ', response);
          // navigate to any screen you want
          //props.navigation;
          // navigate to any screen you want
         // navigation.navigate("Login");
         props.navigation.navigate("SignUp")
      }
      catch(error){
          alert('Error!!');
          console.log('e', error);
      }
    }
    return (
      <SafeAreaView style={styles.container}> 
      
       
        <Image style={styles.image} source={logo} />
        
        <TextInput
            style={styles.TextInput2}
            placeholder="Email"
            placeholderTextColor="#000"
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            style={styles.TextInput2}
            placeholder="Password"
            placeholderTextColor="#000"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        {/* <SafeAreaView style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#000"
            onChangeText={(email) => setEmail(email)}
          />
        </SafeAreaView>
        <SafeAreaView style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#000"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </SafeAreaView> */}
   
        
        
        <TouchableOpacity style={styles.primarybutton} onPress={login}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondarybutton} onPress={()=>props.navigation.navigate("Register")} >
          <Text style={{color:"#cc0830"}}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondarybutton}onPress={()=>props.navigation.navigate("Order")}>
          <Text style={styles.secondarybutton}>Order Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondarybutton} onPress={()=>props.navigation.navigate("ForgetPassword")} >
          <Text style={{color:"000"}}>Forget Password</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }


