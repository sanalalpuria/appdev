import React, { useState } from "react";
import { Image, FlatList,Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Dimensions, Button } from "react-native";
import fries from '../assets/fries.png'; 
const numColumns=2;
import { useDispatch, useSelector } from 'react-redux';
import { connect } from "react-redux";
import * as Actions from '../redux/Actions';
const WIDTH=Dimensions.get("window").width
const DATA = [
{   "id": "m1",
    "name": "Lasagna",
    "price": "350 Rs",
    "img": "img"
},
{   "id": "m2",
    "name": "Alfredo Pasta",
    "price": "400 Rs",
    "img": "img"
},
{   "id": "m3",
    "name": "Mac&Cheese",
    "price": "300 Rs",
    "img": "img"
},
{   "id": "m4",
    "name": "Beef Khausey",
    "price": "250 Rs",
    "img": "img"
},
{   "id": "5",
    "name": "Chicken Khausey",
    "price": "250 Rs",
    "img": "img"
},
];

const Item = ({ dispatch, item, onPress, backgroundColor, textColor , onPressFunction}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
   
    <Image source={fries} style={styles.image} />
    <Text style={[styles.title, textColor]}><b>{item.name}</b></Text>
    <Text style={[styles.title, textColor]}>{item.price}</Text>
    <Pressable onPress={()=>{
     // dispatch(Actions.ADD_TO_CART(selectedId)) ;
     //addItemtoCart(item) ;
     //dispatch(Actions.ADD_TO_CART({ quantity: 1, item }));
     dispatch({ type: Actions.ADD_OR_UPDATE_ITEM, payload:item  })
   
    }}>
  <Text>ADD TO CART </Text>
</Pressable>
  </TouchableOpacity>


);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const dispatch=useDispatch();
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "red" : "white";
    const color = item.id === selectedId ? 'black' : 'black';

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
    paddingTop:30,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    borderRadius:12,
    alignItems:"center",
    justifyContent:"center",
    flex:1,
    marginVertical: 10,
    marginHorizontal: 10,
    margin:5,
    height:WIDTH/numColumns, 
  },
  title: {
    fontSize: 12,
    color:"#fff"
  },
   image: {   
     borderRadius:100,   
      width: 100,
      height: 100,
      marginBottom: 5,
      paddingBottom:20,
    },
});

export default App;