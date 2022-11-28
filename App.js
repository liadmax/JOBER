import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import react , {useState ,useEffect} from "react";
import {firebase} from './config';

import Login from "./src/Login";
import Register from "./src/Register";
import Dashboard from "./src/Dashboard";
import Header from "./Components/Header";

const Stack = createStackNavigator();

function App(){
  const {initializing, setInitializing} = useState(true);
  const {user, setUser} = useState(false);
  // **:)** -legend co0de
  // Handle user state changes
  function onAuthStateChanged(user) { 
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;

  if (!user) {
    return (
      
        <Stack.Navigator>
          <Stack.Screen
           name="Login"
            component={Login}
            options={{ 
              headerTitle:() => <Header title="Login" />,
              headerStyle: { 
                backgroundColor: '#f4511e',
                height: 80,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 25

              }
              }}
             />
              <Stack.Screen
           name="Register"
            component={Register}
            options={{ 
              headerTitle:() => <Header title="Register" />,
              headerStyle: { 
                backgroundColor: '#f4511e',
                height: 80,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 25

              }
              }}
             />
        </Stack.Navigator>
      
    );
  }
return ( 
  <Stack.Navigator>
  <Stack.Screen
   name="Login"
    component={Login}
    options={{ 
      headerTitle:() => <Header title="Login" />,
      headerStyle: { 
        backgroundColor: '#f4511e',
        height: 80,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 25

      }
      }}
     />
      <Stack.Screen
   name="Dashboard"
    component={Dashboard}
    options={{ 
      headerTitle:() => <Header title="Dashboard" />,
      headerStyle: { 
        backgroundColor: '#f4511e',
        height: 80,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 25

      }
      }}
     />
</Stack.Navigator>
    
)
}

export default  () => {
  return(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}