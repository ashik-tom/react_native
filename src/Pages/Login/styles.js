import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "black",
    flex: 1,
  },
  inputContainer: {
    top: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    color: "#14bdef",
    backgroundColor: "#black",
    fontSize: 25,
    fontFamily: "Roboto-Light",
    opacity: 0.6,
    height: 59,
    width: 360,

    paddingStart: 10,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#14bdef",
    borderBottomWidth: 3,
    borderColor: "#14bdef",
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    bottom: 10,
  },
  button: {
    top: 0,
    paddingTop: 14,
    paddingLeft: 16,
    width: 360,
    height: 55,
    backgroundColor: "#C4C4C4",
    borderRadius: 5,
  },
  logoContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    top: 100,
  },
  logo: {
    height: 100,
    width: 100,
  },
  texts: {
    position: "relative",
    color: "white",
    fontSize: 24,
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    bottom: 5,
  },
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent:"flex-end",
    borderRadius:10,
  },
  rectangle:{
    
    width:200,
    height:80,
    backgroundColor: "black" 
  },
  mainButton: {
    position: "absolute",
    // justifyContent: "flex-end",
    height: 86,
    width: 86,
    // bottom: 50,
    // alignItems: "baseline",
    backgroundColor: "#14bdef",
    borderWidth:3,
    borderRadius: 10,
    borderColor: "rgba(255, 255, 255, .1)",
    top:-45
  },
  base: {
    position: "relative",
    backgroundColor: "#3D3D3D",
    justifyContent: "center",
    // alignItems: "center",
    flexDirection: "row",
    height:75
  },

  icon: {
    position: "absolute",
    left:70,
    top:20,
   
    
    
  },
  icon2: {
    position: "absolute",
    right: 80,
    top:20,
    

  },
});
export default styles;
