import { View ,Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import {firebase} from '../config'

const Dashboard = () => {
    const [name, setName] =useState('')

    useEffect(() => {
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot) => {
            if(snapshot.exists){
                setName(snapshot.data())
            }
            else{
                console.log('User does not exist')
            }
        })

    }, [])

    return(
        <>
        <SafeAreaView style={StyleSheet.container}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>
                HELLO {name.firstName}
            </Text>
            <TouchableOpacity
                onPress={() => {firebase.auth().signOut()}}
                style={styles.button}
                >
                <Text style={{fontSize:22, fontWeight: 'bold'}}>
                    SIGN OUT 
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.container}>
            {/* create a deep profile*/}
            <Text style={{fontSize:20, fontWeight:'bold'}}>
                create deep profile here {name.firstName}
            </Text>
            
            

        </View>
  </>
  
  
  
  )

}


export default Dashboard

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        marginTop:100,
    },
    
    button:{
        marginTop:50,
        height:70,
        width:250,
        backgroundColor:'#00e4d0',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    }
})