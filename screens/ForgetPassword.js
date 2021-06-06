import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useState } from "react";
import logo from "../pictures/logo.png";
import axios from "axios";
//import {PRIMARY_COLOR,SECONDARY_COLOR,INPUT_COLOR} from "../Globals" ;
const { width, height } = Dimensions.get("window");
import styles from "./styles";

export default function ForgetPassword(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [name, setName] = useState("");

  const forgot = async () => {
    const link = "http://localhost:4000/change";
    const body = {
      email: email,
      password: password,
    };
    //  alert("done");
    //  console.log("h");
    try {
      const response = await axios.post(link, body);
      // const { data } = response.data;
      console.log("Success result: ", response);
      //  props.navigation;
      // navigate to any screen you want
      props.navigation.navigate("Login");
    } catch (error) {
      alert("Error!!");
      console.log("e", error);
    }
  };
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
        placeholder=" New Password"
        placeholderTextColor="#000"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />

      <TouchableOpacity style={styles.primarybutton} onPress={forgot}>
        <Text style={styles.loginText}>Change Password</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
