import react from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:710,
        backgroundColor:"#000000",
        borderWidth:.5,
        borderColor:"rgba(188, 188, 188, 0.3)",
        marginTop:150,
        flexDirection:"column",
        alignItems: "center",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    covStat:{
        fontSize:28,
        fontWeight:"400",
        color:"white",
        marginTop:5
    },
    divider:{
        marginTop:10,
        width:360,
        borderWidth:1,
        backgroundColor:"white",
        alignSelf:"center"
    }, 
    statBlock:{
        width:350,
        height:90,
        flexDirection:"column",
        marginTop:15,
    },
    name:{
        fontSize:26,
        marginTop:0,
        fontWeight:"400",
        alignItems:"flex-start",
        color:"white"
    },
    blk2:{
        flexDirection:'row',
        justifyContent:"space-between",
        
    },
    statH:{
        fontSize:24,
        fontWeight:"300",
        color:"white"
    },
    divider2:{
        
        width:360,
        borderWidth:1,
        backgroundColor:"white",
        alignSelf:"center"
    }, 
    stepper:{
        width:360,
        height:257,
        marginTop:30
    }
});
export default styles;