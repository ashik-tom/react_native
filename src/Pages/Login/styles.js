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
});
export default styles;
