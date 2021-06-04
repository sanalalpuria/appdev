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
import styles1 from "./styles";
import salad1 from "../assets/salad1.jpeg";
import salad2 from "../assets/salad2.jpeg";
import salad3 from "../assets/salad3.jpeg";
import { PRIMARY_COLOR } from "../Globals";
const numColumns = 2;
const WIDTH = Dimensions.get("window").width;
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import * as Actions from "../redux/Actions";
const DATA = [
  {
    id: "s1",
    name: "Green Bean Salad",
    price: "300 Rs",
    img: salad1,
  },
  {
    id: "s2",
    name: "Grilled Chicken Salad",
    price: "350 Rs",
    img: salad2,
  },
  {
    id: "s3",
    name: "Tofu Salad",
    price: "300 Rs",
    img: salad3,
  },
];

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addItemtoCart: (product) =>
//       dispatch(Actions.addToCart({ quantity: 1, product })),
//   };
// };

const Item = ({
  addItemtoCart,
  item,
  onPress,
  backgroundColor,
  textColor,
  onPressFunction,
  dispatch,
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image source={item.img} style={styles.image} />
    <Text style={[styles.title, textColor]}>
      <b>{item.name}</b>
    </Text>
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
    const backgroundColor = item.id === selectedId ? PRIMARY_COLOR : "white";
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
  },
  image: {
    borderRadius: 100,
    width: 100,
    height: 100,
    marginBottom: 5,
    paddingBottom: 20,
  },
});

//connect(null, mapDispatchToProps)
export default App;
