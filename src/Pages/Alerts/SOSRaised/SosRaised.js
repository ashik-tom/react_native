import React from "react";
import { StyleSheet, View,Text, TouchableWithoutFeedback } from "react-native";


function Sosraised(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>SOS</Text>
            <Text style={styles.message}>Mr Stephen Perera raised an SOS,Be careful</Text>
            <TouchableWithoutFeedback>
                <Text style={styles.btn}>OK</Text>
            </TouchableWithoutFeedback>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width:360,
        height:200,
        backgroundColor:"#262525",
        borderRadius:5,
        flexDirection:"column",
        alignItems:"flex-start",
        alignSelf:"center",
        marginTop:250,
        borderWidth:.5,
        borderColor:"white",
    },
    header:{
        marginTop:30,
        fontSize:24,
        fontWeight:"500",
        color:"white",
        marginLeft:30
    },
    message:{
        fontSize:20,
        fontWeight:"400",
        color:"white",
        margin:15,
        marginLeft:30,
        textAlign:"auto"
        },
    btn:{
        fontSize:24,
        color:"#14bdef",
        fontWeight:'500',
        alignSelf:"flex-end",
        marginRight:30,
   
    }
});


export default Sosraised;