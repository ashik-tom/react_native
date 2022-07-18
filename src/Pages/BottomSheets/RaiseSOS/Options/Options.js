import React from "react";
import {View,StyleSheet,Text,TouchableWithoutFeedBack, TouchableHighlight, TouchableWithoutFeedback} from "react-native";
import styles from "./Styles";

import Icon1 from "react-native-vector-icons/Octicons"
import Icon2 from "react-native-vector-icons/MaterialIcons";

function Options(props) {
    return (
        <View style={styles.container}>
              <View style={{borderColor:"white", marginTop:10,borderWidth:1,width:63,}}/>
              <View style={styles.uploadCon}>
               <Icon1 name="pencil" size={30} color={"white"}/>
               <Text style={styles.label}>Upload Profile Photo</Text>
              </View> 
              <View style={styles.divider}></View>
              <View style={styles.uploadCon2}>
               <Icon2 name="logout" size={30} color={"white"}/>
               <Text style={styles.label} >Logout</Text>
              </View> 
              <TouchableWithoutFeedback>
                <View style={styles.btn}>
                    <Text style={{color:"white",fontSize:26,fontWeight:"400"}}>Cancel</Text>
                </View>
              </TouchableWithoutFeedback>
        </View>
    );
}

export default Options;