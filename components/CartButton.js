import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
//import CartScreen from './screens/CartScreen';

const CartButton = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
      <MaterialIcons name="shopping-cart" size={24} color="black" />
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  cart: state.CartReducers.cart,
});

export default connect(mapStateToProps, null)(CartButton);
