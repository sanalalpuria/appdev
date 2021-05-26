
import React from 'react';
import { Text, View, Image,
    
    Button,
    TouchableOpacity,
   Dimensions} from 'react-native';
import { PRIMARY_COLOR } from '../Globals';
   const{width,height}=Dimensions.get("window");

const MenuItem=({data})=>{
    const {name,price,image,category}=data
    return (
        <View style={{
            width:width*0.9,
            height:50,
            backgroundColor:PRIMARY_COLOR,
            marginBottom:16,
            
        }}>
        <Text> {name}</Text>

        </View>
    )
}
export default MenuItem;