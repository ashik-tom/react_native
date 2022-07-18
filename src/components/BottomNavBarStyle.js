import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        borderRadius:10,
        position:"absolute",
        bottom:5,
        width:370,
        marginLeft:11,
        elevation:0,
        backgroundColor:"grey",
        borderRadius:15,
        height:80
      },

  mainButton: {
    position:"relative",
    justifyContent: "center",
    height: 90,
    width: 90,
    bottom: 50,
    alignItems: "center",
    backgroundColor: "#14bdef",
    borderWidth:3,
    borderRadius: 10,
    borderColor: "rgba(255, 255, 255, .1)",
    bottom:85
    
  },
  symbol:{
    alignItems:"center"
  },
  rectangle: {
    height:45,
    width:45,
    left:-90,
    top:70
  },
  rectangle2:{
    height:48,
    width:48,
    left:140,
    top:28 
  },
 


});
export default styles;