import React from "react";
import { StyleSheet, View,Text } from "react-native";


function WelcomeSnack(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Congratulations</Text>
            <Text style={styles.message}>Welcome back to office</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:360,
        height:80,
        backgroundColor:"#27AE45",
        borderRadius:5,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginTop:80
    },
    header:{
        fontSize:22,
        fontWeight:"500",
        color:"white"
    },
    message:{
        fontSize:18,
        fontWeight:"400",
        color:"white"
    }
});


export default WelcomeSnack;