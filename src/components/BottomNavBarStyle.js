import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        borderRadius:10,
        position:"absolute",
        bottom:15,
        width:"90%",
        left:20,
        right:30,
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
    top:-90
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
  }
 

//   icon: {
//     position: "absolute",
//     left:70,
//     top:20,
   
    
    
//   },
//   icon2: {
//     position: "absolute",
//     right: 80,
//     top:20,
    

//   },
});
export default styles;