import react from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    
    container:{
        marginTop:30,
        paddingLeft:30,
        paddingRight:30,
        paddingTop:20,
        backgroundColor:"#171717",
        flex:1,

    },
    titleNotif:{
        paddingTop:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    parentList:{
        flexDirection:"column",
        justifyContent:"space-evenly"
    },
    homeListf:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:0
    },
    homeList:{
        flexDirection:"row",
        justifyContent:"space-around",
        paddingTop:20
    },
    imageName:{
        flexDirection:"column",
        justifyContent:"space-around",
    },
    circle:{
        height:60,
        width:60,
        borderRadius:30,
        backgroundColor:"red",
        marginBottom:5
    },
    nameBox:{
        height:16,
        width:60,
        borderRadius:20,
        backgroundColor:"#19B400",        
    }
});
export default styles;