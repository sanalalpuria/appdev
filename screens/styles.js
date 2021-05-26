import { StyleSheet, Dimensions } from 'react-native';
const{width,height}=Dimensions.get("window");
import {PRIMARY_COLOR,SECONDARY_COLOR,INPUT_COLOR} from "../Globals";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 305,
    height: 170,
    marginBottom: 20,
  },
  inputView: {
    backgroundColor: '#e1bbbb',
    borderRadius: 3,
    width: '60%',
    height: 40,
    marginBottom: 12,
    paddingLeft: 10,

  },
  TextInput2: {
    height: 56,
    width: width*0.6,
    //flex: 1,
    padding: 16,
    //marginLeft: 125,
    //alignItems:"center",
    color:"#000",
    backgroundColor:INPUT_COLOR,
    borderRadius:10,
    marginBottom:24,



    
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 8,
    paddingLeft: 10,
    marginLeft: 0,
  },

  forgot_button: {
    height: 30,
    marginBottom: 25,
  },

  loginBtn: {
    width: '40%',
    borderRadius: 0,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
    backgroundColor: '#af2121',
  },

  loginText: {
    color: '#fff',
  },
  signupBtn: {
    width: '60%',
    borderRadius: 2,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#cc0830',
  },
  secondarybutton: {
    //width: '60%',
    height: 56,
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:5,
    
  },
  primarybutton:{
    width:width*0.6,
    height:56,
    borderRadius:10,
    marginBottom:24,
    backgroundColor:PRIMARY_COLOR,
    alignItems: "center",
    justifyContent: "center",
    
   }
});
export default styles;
