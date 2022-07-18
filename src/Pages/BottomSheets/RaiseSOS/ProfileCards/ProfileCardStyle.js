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
    titleBlock:{
        width:290,
        height:100,
        marginTop:30,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    img:{
        height:90,
        width:90,
        borderRadius:45,
        borderWidth:3,
        borderColor:"red"
    },
    nameBox:{
        width:180,
        height:70,
        flexDirection:"column",
        alignItems: "flex-start", 
               
    },
    name:{
        fontSize:28,
        fontWeight:"400",
        color:"white",
        
    },
    designation:{
        fontSize:20,
        fontWeight:"300",
        color:"white",
      
    },
    divider:{
            marginTop:15,
            width:360,
            borderWidth:1,
            backgroundColor:"white",
            alignSelf:"center"
    },
    vacContainer:{
        width:290,
        height:110,
        flexDirection:"column",
        alignItems:"stretch"
    },
    sos:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:20
    },
    sos2:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10
    },
    divider2:{
            marginTop:40,
            width:360,
            borderWidth:1,
            backgroundColor:"white", 
    },
    stepper:{
        width:360,
        height:257,
        marginTop:10
    }


  

    
})
export default styles;