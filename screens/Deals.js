import React, { useState } from "react";
import { Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import fries from '../assets/fries.png'; 
const numColumns=2;
const WIDTH=Dimensions.get("window").width;

const DATA = [{
    "dname": "Large Pizza + Drink",
    "dprice": "1000 Rs",
    "deal": "20% off",
    "img": "url"
},
{
    "dname": "Fresh Juice",
    "dprice": "200 Rs",
    "deal": "25% off",
    "img": "url"
}, {
    "dname": "Chicken Family Pack",
    "dprice": "1200 Rs",
    "deal": "17% off",
    "img": "url"
}, {
    "dname": "Tandoori Chicken",
    "dprice": "1200 Rs",
    "deal": "20% off",
    "img": "url"
},
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image source={fries} style={styles.image} />
    <Text style={[styles.title, textColor]}><b>{item.dname}</b></Text>
    <Text style={[styles.title, textColor]}>{item.dprice}</Text>
    <Text style={[styles.ds, textColor]}>{item.deal}</Text>
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
      textAlign:"center",
      flex:1,
      marginVertical: 10,
      marginHorizontal: 10,
      margin:5,
      height:WIDTH/numColumns, 
    },
    title: {
      fontSize: 12,
      color:"#fff",
    },
    ds: {
      fontSize: 12,
      textColor:"#red",
    },
     image: {   
       paddingTop:5,
       borderRadius:100,   
        width: 100,
        height: 100,
        marginBottom: 5,
        paddingBottom:20,
      },
  });

export default App;