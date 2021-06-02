import React, { useState } from "react";
import { Pressable,Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import logo from '../assets/logo.png'; 
const numColumns=2;
const WIDTH=Dimensions.get("window").width
const DATA = [
  { "id":"b1",
    "name": "Soft Drink 500ml",
    "price": "60 Rs",
    "img": "url"
  },
  { "id":"b2",
    "name": "Soft Drink 1l",
    "price": "120 Rs",
    "img": "url"
  },
  { "id":"b3",
    "name": "Fresh Juices",
    "price": "110 Rs",
    "img": "url"
  },
  { "id":"b4",
    "name": "Coffee",
    "price": "200 Rs",
    "img": "url"
  },

];

const Item = ({ item, onPress, backgroundColor, textColor, onPressFunction }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image source={logo} style={styles.image} />
    <Text style={[styles.title, textColor]}><b>{item.name}</b></Text>
    <Text style={[styles.title, textColor]}>{item.price}</Text>
    <Pressable onPress={onPressFunction}>
  <Text>ADD TO CART </Text>
</Pressable>
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