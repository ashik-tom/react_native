import React from "react";
import { StyleSheet, View,Text, TouchableWithoutFeedback } from "react-native";


function Logout(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Logout</Text>
            <Text style={styles.message}>Do you want to Logout ?</Text>
            <View style={styles.btnContainer}>  
            <TouchableWithoutFeedback>
                <Text style={styles.btn1}>Yes</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
                <Text style={styles.btn}>Cancel</Text>
            </TouchableWithoutFeedback>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:360,
        height:180,
        backgroundColor:"#262525",
        borderRadius:5,
        flexDirection:"column",
        alignItems:"flex-start",
        alignSelf:"center",
        marginTop:250,
        borderWidth:.5,
        borderColor:"white"
    },
    header:{
        marginTop:25,
        marginLeft:30,
        fontSize:24,
        fontWeight:"500",
        color:"white"
    },
    message:{
        fontSize:20,
        fontWeight:"300",
        color:"white",
        margin:15,
        marginTop:20,
        marginLeft:30,
        textAlign:"center"
        },
    btn:{
        fontSize:24,
        color:"#14bdef",
        fontWeight:'500',
        alignSelf:"flex-end",
        marginRight:30
   
    },
    btn1:{
        fontSize:24,
        color:"#14bdef",
        fontWeight:'500',
        alignSelf:"flex-end",
        marginRight:20
    },
    btnContainer:{
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"flex-end",
        width:"100%"
    }
});


export default Logout;