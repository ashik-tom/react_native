import React from "react";
import { StyleSheet,View,Text,Image,TouchableWithoutFeedback, } from "react-native";
import Icons from "react-native-vector-icons/MaterialIcons"
import styles from "./UploadPicstyles";

function UploadPic(props) {
    return (
       <View style={styles.container}>
        <View style={{borderColor:"white", marginTop:10,borderWidth:1,width:63,}}/>
        <Text style={{color:"white",fontSize:28,fontWeight:"400",marginTop:15}}>Update Photo</Text>
        <View style={styles.divider}/>
        <View style={styles.contain1}>
            <Icons name="photo-camera" size={30} color={"white"}/>
            <Text style={{color:"white",fontSize:26,fontWeight:"400",marginLeft:10}}>Camera</Text>
        </View>
        <View style={styles.divider}/>
        <View style={styles.cont2}>
            <Icons name="photo" size={30} color={"white"}/>
            <Text style={{color:"white",fontSize:26,fontWeight:"400",marginLeft:10}}>Photos</Text>
        </View>
        <TouchableWithoutFeedback>
                <View style={styles.btn}>
                    <Text style={{color:"white",fontSize:26,fontWeight:"400"}}>Cancel</Text>
                </View>
              </TouchableWithoutFeedback>
       </View>
    );
}

export default UploadPic;