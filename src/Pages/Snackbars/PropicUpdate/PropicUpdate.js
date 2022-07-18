import React from "react";
import { StyleSheet, View,Text } from "react-native";


function ProPicUpdateSnack(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Profile photo has been changed Successfully</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:360,
        height:80,
        backgroundColor:"#262525",
        borderRadius:5,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginTop:80
    },
    message:{
        fontSize:18,
        fontWeight:"400",
        color:"white",
        textAlign:"center"
    }
});


export default ProPicUpdateSnack;