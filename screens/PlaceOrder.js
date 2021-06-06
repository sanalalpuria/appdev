import React, { useState } from "react";
import {
  Image,
  TextInput,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import styles from "./styles";
import logo from "../pictures/logo.png";

export default function Verify(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const order = async () => {
    const link = "http://localhost:4000/order";
    const body = {
      name: name,
      address: address,
      phone: phone,
    };
    //  alert("done");
    //  console.log("h");
    try {
      const response = await axios.post(link, body);
      // const { data } = response.data;
      console.log("Success result: ", response);
      // navigate to any screen you want
      // props.navigation.navigate("LogIn");
    } catch (error) {
      alert("Error!!");
      console.log("e", error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.image} source={logo} />
      <View>
        <Text style={styles.header}>Verify Address</Text>
      </View>

      <TextInput
        style={styles.TextInput2}
        placeholder="Full Name"
        placeholderTextColor="#000"
        onChangeText={(name) => setName(name)}
      />

      <TextInput
        style={styles.TextInput2}
        placeholder="Address"
        placeholderTextColor="#000"
        onChangeText={(address) => setAddress(address)}
      />

      <TextInput
        style={styles.TextInput2}
        placeholder="Phone Number"
        placeholderTextColor="#000"
        onChangeText={(phone) => setPhone(phone)}
      />

      <TouchableOpacity
        style={styles.primarybutton}
        onPress={() => {
          order;
        }}
      >
        <Text
          style={styles.loginText}
          onPress={() => props.navigation.navigate("Confirm")}
        >
          CONFIRM ORDER
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelbtn1}
        onPress={() => props.navigation.navigate("CartScreen")}
      >
        <Text>Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
