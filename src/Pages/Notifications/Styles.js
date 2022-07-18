import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        marginTop:50,
        padding:20,flex:1,
        flexDirection:"column",
        backgroundColor:"black"
    },
    header:{
        marginTop:10,
        flexDirection:"row"
    },
    notifText:{
        color:"white",
        fontSize:24,
        fontWeight:"400",
        marginLeft:10
    },
    notifContainer:{
        marginTop:15,
        flexDirection:"column"
    },
    notif:{
        flexDirection:"row",
        marginTop:10,
        borderWidth:.05,
        height:90,
        width:360,
        borderColor:"white",
        alignSelf:"center",
        borderRadius:2,
        backgroundColor:"#060606"
    },
    notifdatal:{
        flexDirection:"column"
    },
    img:{
        height:60,
        width:60,
        borderRadius:30,
        marginTop:15,
        marginLeft:10
    },
    name:{
        color:"white",
        fontSize:18,
        fontWeight:"400",
        marginTop:10,
        marginLeft:20
    },
    status:{
        color:"white",
        marginLeft:20,
        fontSize:14,
        fontWeight:"400",
    },
    date:{
        color:"white",
        fontSize:12,
        fontWeight:"400",
        alignSelf:"flex-end",
        marginTop:5
    },
    notif2:{
        flexDirection:"row",
        marginTop:5,
        borderWidth:.05,
        height:90,
        width:360,
        borderColor:"white",
        alignSelf:"center",
        borderRadius:2,
        backgroundColor:"#060606"
    },

});
export default styles;