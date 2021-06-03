import React from 'react';
import { View, Text, TouchableOpacity ,StyleSheet, Platform} from 'react-native';
import { Ionicons,MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

const CartItem=({data,onPressRemove})=>{
    const {name,price,quantity}=data;
    const total=price*quantity;

return (
<View  style={{
    width:"90%",
    marginBottom:16,
    backgroundColor:"#eee",
    borderRadius:5,
    alignSelf:"center"
}}>
    
    <Text style={{}}>
            {quantity}
        </Text>
        <Text styles={styles.title}>
            {name}
       
    </Text>
    <View style={styles.data}>
     <Text style={styles.amt}>
         {price}
     </Text>
     <TouchableOpacity onPress={onPressRemove} style={styles.delete}>
<Ionicons
name={Platform.OS==='android' ? 'md-trash' : 'ios-trash' }
size={24} color="black" >
</Ionicons>
     </TouchableOpacity>
    </View>
    <Text style={styles.amt}>
         {total}
     </Text>
</View>

)};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:30,
      //marginTop: StatusBar.currentHeight || 0,
    },
    delete:{

    },
    button:{
     padding:10,
     backgroundColor:"white",


    },
    qty:{

    },
    title:{

    },
    data:{

    },

    amt:{

    },
    
  });
export default CartItem;