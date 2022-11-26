import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, {useState, useEffect} from "react";
import {Text, View } from 'react-native'
import firebase from "./config";
import Login from "./src/Login";
import Register from "./src/Register";
import Dashboard from "./src/Dashboard";
import header from "./components/header";


const stack = createStackNavigator();


function App(){
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();


  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  // useEffect(() => {
  //   const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);
  if(initializing) return null;
  if(!user){
    return(
      <stack.Navigator>
      <stack.screen
       name="Login" 
       component={Login}
       options={{
        headerTitle: () => <header name="Login" />,
        headerStyle: {
          backgroundColor: '#f4511e',
          hight: 150,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          elevation: 25

        },
       }}
        />
        <stack.screen
       name="Register" 
       component={Register}
       options={{
        headerTitle: () => <header name="Login" />,
        headerStyle: {
          backgroundColor: '#f4511e',
          hight: 150,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          elevation: 25

        },
       }}
        />

      </stack.Navigator>
    )
  }
  return(
    <stack.Navigator>
      <stack.screen
       name="password" 
       component={Dashboard}
       options={{
        headerTitle: () => <header name="Login" />,
        headerStyle: {
          backgroundColor: '#f4511e',
          hight: 150,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          elevation: 25
          
        },
       }}
        />
        </stack.Navigator>

  );

}


export default () => {
  return(
    <NavigationContainer>
      <App /> 
      <Login />
    </NavigationContainer>
  )
}




