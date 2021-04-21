import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,
    TextInput,
    Button,
    TouchableOpacity,
    SafeAreaView,Dimensions} from 'react-native';
import  { useState } from 'react';
import logo from "./pictures/logo.png" ; 
import axios from 'axios';
import {PRIMARY_COLOR,SECONDARY_COLOR,INPUT_COLOR} from "./Globals" ;
const{width,height}=Dimensions.get("window");

export default function ForgetPassword(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [name, setName] = useState("");
   
    const login = async () => {
     
      const link = "http://localhost:4000/change";
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
          props.navigation;
          // navigate to any screen you want
          navigation.navigate("Login");
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
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#000"
            onChangeText={(email) => setEmail(email)}
          />
        
        
          <TextInput
            style={styles.TextInput}
            placeholder=" New Password"
            placeholderTextColor="#000"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
       
        
   
        
        <TouchableOpacity style={styles.signupBtn} onPress={()=>props.navigation.navigate("LogIn")} >
          <Text style={styles.loginText}>Change Password</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 24,
    width:width*0.3,
    height:width*0.3,
    resizeMode:"contain",
  },
  inputView: {
    backgroundColor: "#e81741",
    borderRadius: 2,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  
  TextInput: {
    height: 56,
    width: width*0.6,
    //flex: 1,
    padding: 16,
    //marginLeft: 125,
    //alignItems:"center",
    color:"#000",
    backgroundColor:INPUT_COLOR,
    borderRadius:10,
    marginBottom:24,
 //sana
    
  },
  signupBtn: {
    width:width*0.6,
   height:56,
   borderRadius:10,
   marginBottom:24,
   backgroundColor:PRIMARY_COLOR,
   alignItems: "center",
   justifyContent: "center",
  },
  loginText:{
    color:"#ffffff",
  }
  
});
