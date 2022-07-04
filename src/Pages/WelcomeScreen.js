import React from 'react';
import { ImageBackground,StyleSheet,View,Image,Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        source={require("../assets/background.jpg")}
        style={styles.background}>
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo.png")}/>
            <Text>covid warning system</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.signUpButton}></View>

            
            
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:'center'
        
        },
    loginButton:{
        width:"100%",
        height:70,
        backgroundColor:"#14bdef"
        },
    signUpButton:{
        width:"100%",
        height:70,
        backgroundColor:"#4ecdc4"
        },
    logo:{
        width:100,
        height:100,
    },
    logoContainer:{
        top:80,
        position:'absolute',
        alignItems:'center'
    }
})

export default WelcomeScreen;