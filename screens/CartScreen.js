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
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../redux/Actions";
import { FlatList } from "react-native-gesture-handler";
import CartItem from "../components/CartItem";

export default function ForgetPassword(props) {
  const cart = useSelector((state) => state.CartReducers.cart); //data read from redux
  console.log(cart);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={logo} />
      <View style={{ width: "60%" }}>
        <FlatList
          style={{
            width: "60%",
          }}
          data={cart}
          renderItem={({ item }) => {
            return (
              <CartItem
                key={item.id}
                data={item}
                onPressRemove={() =>
                  dispatch({ type: Actions.REMOVE_FROM_CART, payload: item })
                }
              />
            );
          }}
          keyExtractor={(item) => item.id}
          // extraData={selectedId}
          // numColumns={numColumns}
        />
      </View>
      <TouchableOpacity
        style={styles.primarybutton}
        onPress={() => props.navigation.navigate("PlaceOrder")}
      >
        <Text style={styles.loginText}>Place Order</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelbtn1}
        onPress={() => props.navigation.navigate("Order")}
      >
        <Text>Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
