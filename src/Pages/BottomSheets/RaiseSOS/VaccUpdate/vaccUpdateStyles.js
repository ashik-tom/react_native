import { StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:430,
        backgroundColor:"#000000",
        borderWidth:.5,
        borderColor:"rgba(188, 188, 188, 0.3)",
        marginTop:380,
        flexDirection:"column",
        alignItems: "center",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    header:{
        fontSize:28,
        fontWeight:"400",
        marginTop:16,
        color:"white",
        alignSelf:"center"
    },
    divider:{
        marginTop:15,
        width:360,
        borderWidth:1,
        backgroundColor:"white",
        alignSelf:"center"
    },
    dose:{
        width:360,
        flexDirection:"row",
        marginTop:25, 
        justifyContent:"space-between"
    },
    txt:{
        fontSize:24,
        fontWeight:"400",
        color:"white",
    },
    btn:{
        marginTop:30,
        justifyContent:"center",
        alignItems:"center",
        width:360,
        height:50,
        backgroundColor:"#14bdef",
        borderRadius:5
    },
    btn2:{
        marginTop:10,
        justifyContent:"center",
        alignItems:"center",
        width:360,
        height:50,
        backgroundColor:"#D3D3D3",
        borderRadius:5
    }


    
})
export default styles;