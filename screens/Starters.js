import React, { useState } from "react";
import {
  Image,
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styles1 from "./styles";
import starter1 from "../assets/starter1.jpeg";
import starter2 from "../assets/starter2.jpeg";
import starter3 from "../assets/starter3.jpeg";
import starter4 from "../assets/starter4.jpeg";
import { PRIMARY_COLOR } from "../Globals";
const numColumns = 2;
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import * as Actions from "../redux/Actions";
import { BorderlessButton } from "react-native-gesture-handler";
const WIDTH = Dimensions.get("window").width;
const DATA = [
  { id: "st1", name: "Fries", price: "90 Rs", img: starter1 },
  { id: "st2", name: "Wings", price: "120 Rs", img: starter2 },
  { id: "st3", name: "Onion Rings", price: "90 Rs", img: starter3 },
  { id: "st4", name: "Nachos", price: "230 Rs", img: starter4 },
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
    <Image source={item.img} style={styles.image} />
    <Text style={[styles.title, textColor]}>{item.name}</Text>
    <Text style={[styles.title, textColor]}>{item.price}</Text>

    <TouchableOpacity
      onPressIn={() => {
        backgroundColor = PRIMARY_COLOR;
      }}
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
