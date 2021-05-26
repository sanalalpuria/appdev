import React, { useState } from "react";
import { Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Dimensions, Button } from "react-native";
import fries from '../assets/fries.png'; 
const numColumns=2;
const WIDTH=Dimensions.get("window").width
const DATA = [
{   "id": "1",
    "mtname": "Lasagna",
    "mprice": "350 Rs",
    "img": "img"
},
{   "id": "2",
    "mtname": "Alfredo Pasta",
    "mprice": "400 Rs",
    "img": "img"
},
{   "id": "3",
    "mtname": "Mac&Cheese",
    "mprice": "300 Rs",
    "img": "img"
},
{   "id": "4",
    "mtname": "Beef Khausey",
    "mprice": "250 Rs",
    "img": "img"
},
{   "id": "5",
    "mtname": "Chicken Khausey",
    "mprice": "250 Rs",
    "img": "img"
},
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
   
    <Image source={fries} style={styles.image} />
    <Text style={[styles.title, textColor]}><b>{item.mtname}</b></Text>
    <Text style={[styles.title, textColor]}>{item.mprice}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "red" : "white";
    const color = item.id === selectedId ? 'black' : 'black';

    return (
      <Item
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