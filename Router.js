import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Order from "./screens/Order";
import Starters from "./screens/Starters";
import Main from "./screens/Main";
import Confirm from "./screens/Confirm";
import Desserts from "./screens/Desserts";
import Beverages from "./screens/Beverages";
import Salads from "./screens/Salads";
import CartScreen from "./screens/CartScreen";
import PlaceOrder from "./screens/PlaceOrder";
import CartButton from "./components/CartButton";
import ForgetPassword from "./screens/ForgetPassword";
import { useSelector } from "react-redux";
import { PRIMARY_COLOR } from "./Globals";

export default function App() {
  //const user = useSelector((state) => state.AuthReducers.user);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: PRIMARY_COLOR,
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          /* options={{ title: 'Login' }}*/
        />
        <Stack.Screen
          name="Register"
          component={Register}
          /*options={{ title: 'Register' }}*/
        />

        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{ title: "Forgot Password" }}
        />
        <Stack.Screen
          name="Order"
          component={Order}
          options={
            ({ route, navigation }) => {
              return {
                headerTitle: "Order",
                headerRight: () => <CartButton navigation={navigation} />,
              }; //end return
            } //end callback
          } //end options
        />
        <Stack.Screen
          name="Salads"
          component={Salads}
          options={{ title: "Salads" }}
        />
        <Stack.Screen
          name="Beverages"
          component={Beverages}
          options={{ title: "Bevarages" }}
        />
        <Stack.Screen
          name="Desserts"
          component={Desserts}
          options={{ title: "Desserts" }}
        />
        <Stack.Screen
          name="Starters"
          component={Starters}
          options={{ title: "Starters" }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "Main" }}
        />

        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ title: "Cart" }}
        />

        <Stack.Screen
          name="PlaceOrder"
          component={PlaceOrder}
          options={{ title: "Confirm Order" }}
        />

        <Stack.Screen
          name="Confirm"
          component={Confirm}
          options={{ title: "Confirmation Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  //export default App;
}
