import React, { useState } from "react";
import {
  Pressable,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import logo from "../assets/logo.png";
import { PRIMARY_COLOR } from "../Globals";
import styles1 from "./styles";
const numColumns = 2;
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import * as Actions from "../redux/Actions";
const WIDTH = Dimensions.get("window").width;
const DATA = [
  { id: "b1", name: "Soft Drink 500ml", price: "60 Rs", img: "url" },
  { id: "b2", name: "Soft Drink 1l", price: "120 Rs", img: "url" },
  { id: "b3", name: "Fresh Juices", price: "110 Rs", img: "url" },
  { id: "b4", name: "Coffee", price: "200 Rs", img: "url" },
];

const Item = ({
  dispatch,
  item,
  onPress,
  backgroundColor,
  textColor,
  onPressFunction,
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image source={logo} style={styles.image} />
    <Text style={[styles.title, textColor]}>{item.name}</Text>
    <Text style={[styles.title, textColor]}>{item.price}</Text>
    <TouchableOpacity
      style={styles1.cancelbtn}
      onPress={() => {
        // dispatch(Actions.ADD_TO_CART(selectedId)) ;
        //addItemtoCart(item) ;
        //dispatch(Actions.ADD_TO_CART({ quantity: 1, item }));
        dispatch({ type: Actions.ADD_OR_UPDATE_ITEM, payload: item });
      }}
    >
      <Text>ADD TO CART </Text>
    </TouchableOpacity>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "white" : "white";
    const color = item.id === selectedId ? "black" : "black";

    return (
      <Item
        dispatch={dispatch}
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        numColumns={numColumns}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 8,
    margin: 15,
    height: 210,
    width: 210,
  },
  title: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
  image: {
    borderRadius: 100,
    width: 100,
    height: 100,
    marginBottom: 5,
    paddingBottom: 20,
  },
});

export default App;
