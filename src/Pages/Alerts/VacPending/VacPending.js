import React from "react";
import { StyleSheet, View,Text, TouchableWithoutFeedback } from "react-native";


function VacPending(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Vaccination Pending</Text>
            <Text style={styles.message}>Second Dose of your vaccination is pending, vaccinate yourself as soon as possible</Text>
            <TouchableWithoutFeedback>
                <Text style={styles.btn}>OK</Text>
            </TouchableWithoutFeedback>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:360,
        height:240,
        backgroundColor:"#262525",
        borderRadius:5,
        flexDirection:"column",
        alignItems:"center",
        alignSelf:"center",
        marginTop:200,
        borderWidth:.5,
        borderColor:"white"
    },
    header:{
        marginTop:40,
        fontSize:24,
        fontWeight:"500",
        color:"white"
    },
    message:{
        fontSize:20,
        fontWeight:"400",
        color:"white",
        margin:15,
        marginTop:20,
        textAlign:"center"
        },
    btn:{
        fontSize:24,
        color:"#14bdef",
        fontWeight:'500',
        alignSelf:"flex-end",
        marginRight:40,
   
    }
});


export default VacPending;