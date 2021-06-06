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
  Button,
} from "react-native";
import styles1 from "./styles";
const numColumns = 2;
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import * as Actions from "../redux/Actions";
import { PRIMARY_COLOR } from "../Globals";
import main1 from "../assets/main1.jpeg";
import main2 from "../assets/main2.jpeg";
import main3 from "../assets/main3.jpeg";
import main4 from "../assets/main4.jpeg";
import main5 from "../assets/main5.jpeg";
const WIDTH = Dimensions.get("window").width;
const DATA = [
  { id: "m1", name: "Lasagna", price: "350 Rs", img: main1 },
  { id: "m2", name: "Alfredo Pasta", price: "400 Rs", img: main2 },
  { id: "m3", name: "Mac&Cheese", price: "300 Rs", img: main3 },
  { id: "m4", name: "Beef Khausey", price: "250 Rs", img: main4 },
  { id: "5", name: "Chicken Khausey", price: "250 Rs", img: main5 },
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
    <Pressable
      style={styles1.cancelbtn}
      onPress={() => {
        // dispatch(Actions.ADD_TO_CART(selectedId)) ;
        //addItemtoCart(item) ;
        //dispatch(Actions.ADD_TO_CART({ quantity: 1, item }));
        dispatch({ type: Actions.ADD_OR_UPDATE_ITEM, payload: item });
      }}
    >
      <Text>ADD TO CART </Text>
    </Pressable>
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
