import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
            width:"100%",
            height:300,
            backgroundColor:"#000000",
            borderWidth:.5,
            borderColor:"rgba(188, 188, 188, 0.3)",
            marginTop:520,
            flexDirection:"column",
            alignItems: "center",
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
    },
    divider:{
        marginTop:15,
        width:360,
        borderWidth:1,
        backgroundColor:"white",
        alignSelf:"center"
    },
    uploadCon:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:50,
        justifyContent:"space-between"
    },
    uploadCon2:{
        alignItems:"center",
        width:"100%",
        marginTop:20,
        flexDirection:"row",
        justifyContent:"flex-start",
        paddingLeft:50

    },
    label:{
        fontSize:26,
        color:"white",
        fontWeight:"400",
        marginLeft:20,
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


});
export default styles;