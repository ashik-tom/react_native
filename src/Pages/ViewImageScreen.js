import React from 'react';
import{Image,StyleSheet,View} from "react-native";


function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}/>
            <View style={styles.closeIcon}/>
        <Image style={styles.image} source={require("../assets/bg2.jpg")}></Image>
        </View>
    );
}
const styles = StyleSheet.create({
    closeIcon:{
        width:50,
        height:50,
        backgroundColor:"#fc5c65",
        position:"absolute",
        top:30,
        left:40
    },
    deleteIcon:{
        width:50,
        height:50,
        backgroundColor:"#4ecdc4",
        position:"absolute",
        top:30,
        right:40
    },
    image:{
        width:"70%",
        height:"70%",
        alignSelf:"center",
        position:"relative"
    },
    container:{
        flex:1,
        backgroundColor:"#000"
    }
});

export default ViewImageScreen;