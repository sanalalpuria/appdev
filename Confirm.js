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
//import { PRIMARY_COLOR,SECONDARY_COLOR,INPUT_COLOR } from '../Globals';
//import styles from './styles';

const { width, height } = Dimensions.get("window");
import styles from "./styles";
//import logo from "../pictures/logo.png" ;

export default function Confirm(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={logo} />
      <View>
        <Text>Thank you for Ordering!</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.cancelbtn}
          onPress={() => props.navigation.navigate("Order")}
        >
          Back
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
