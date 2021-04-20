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
import { PRIMARY_COLOR,SECONDARY_COLOR,INPUT_COLOR } from './Globals';

const{width,height}=Dimensions.get("window");


export default function SignupScreen(props) {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
   
    const signup = async () => {
     
      const link = "http://localhost:4000/register";
      const body = {
          name:name,
          email: email,
          password: password
      };
    //  alert("done");
    //  console.log("h");
      try{
          const response = await axios.post(link, body);
         // const { data } = response.data;
          console.log('Success result: ', response);
        //  props.navigation;
          // navigate to any screen you want
          props.navigation.navigate("LogIn");
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
            placeholder="Name"
            placeholderTextColor="#000"
            onChangeText={(name) => setName(name)}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#000"
            onChangeText={(email) => setEmail(email)}
          />
           <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#000"
          
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        {/* <SafeAreaView style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Name"
            placeholderTextColor="#ffffff"
            onChangeText={(name) => setName(name)}
          />
        </SafeAreaView> */}
        {/* <SafeAreaView style={styles.inputView}>
          
        </SafeAreaView> */}
        {/* <SafeAreaView style={styles.inputView}>
         
        </SafeAreaView> */}
   
        
      
        <TouchableOpacity style={styles.signupBtn} onPress={signup}>
          <Text style={styles.loginText}>SIGN UP</Text>
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
