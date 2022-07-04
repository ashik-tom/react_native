import React from 'react';
import { View ,StyleSheet,Image,TextInput,Text,TouchableOpacity, Button} from 'react-native';
import styles from "./styles.js";

function LoginScreen(props) {
    return (
        <View style={styles.screen}>
            <View style={styles.logoContainer}>
            <Image source={require("../../assets/logo.png")} style={styles.logo}></Image>
            </View>
            <View style={styles.inputContainer} >
              <TextInput placeholder="Employee Id" style={styles.input} ></TextInput>
              <View style={{width:360,minHeight:100}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.texts}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
    );
}
export default LoginScreen;