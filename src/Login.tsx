import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import {firebase} from '../config'


const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  const loginUser = async (email, password) => {
    try{
      await firebase.auth().signInWithEmailAndPassword(email, password)
      
    }catch{
      alert(Error)
      alert('error')
    }

  }

 

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <View style={styles.inputView}>
            <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}   
            autoCapitalize="none"
            autoCorrect={false}
            />
            <TextInput
            style={styles.input}
            placeholder="password"
            onChangeText={(password) => setPassword(password)}  
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            />
            </View>
            <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} onPress={() => loginUser(email, password)}>
                <Text style={styles.buttonText}>login</Text>
                </TouchableOpacity>
                </View>
                <View  style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate()}>
                <Text style={styles.buttonText}>new here? register!</Text>
                </TouchableOpacity>
                </View>
            </View>
            
            

    )
}

export default Login ;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',   
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    inputView: {
        width: '80%',
        marginBottom: 20
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#f2f2f2',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10
    },
    button: {
        width: '80%',
        backgroundColor: '#2dd4da',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 20
    },
    buttonView:{
        width: '80%',
        backgroundColor: '#2dd4da',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10

    },
    buttonViewText: {
        color: '#000000',
        fontSize: 20
    }
  


})