import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:"100%",
       height:350,
       backgroundColor:"#000000",
       borderWidth:.5,
       borderColor:"rgba(188, 188, 188, 0.3)",
       marginTop:475,
       flexDirection:"column",
       alignItems: "center",
       borderTopLeftRadius:20,
       borderTopRightRadius:20,
    } ,
    contain1:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:20,
        width:"100%",
        justifyContent:"flex-start",
        paddingLeft:30
    },
    cont2:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:20,
        justifyContent:"flex-start",
        width:"100%",
        paddingLeft:30
    },
    divider:{
        marginTop:16,
        width:360,
        borderWidth:1,
        backgroundColor:"white",
        alignSelf:"center"
    },

    
    btn:{
        backgroundColor:"#D6D6D6",
            height:55,
            width:360,
            justifyContent:"center",
            alignItems:"center",
            borderRadius:5,
            marginTop:30,
    }
})
export default styles;