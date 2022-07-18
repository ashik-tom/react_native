import React from "react";
import { StyleSheet,View,Text,TouchableOpacity,TouchableWithoutFeedBack, TouchableHighlight } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome5";


import styles from "./vaccUpdateStyles";

function VaccUpdate(props) {
    return (
        <View style={styles.container}>
            <View style={{borderColor:"white", marginTop:10,borderWidth:1,width:63,}}/>
            <Text style={styles.header}>Vaccination Status</Text>
            <View style={styles.divider}></View>
            <View style={styles.dose}>
                <Text style={styles.txt}>First dose</Text>
                <Icons name="check-circle" size={30} color={"green"}/>
            </View>
            <View style={styles.dose}>
                <Text style={styles.txt}>Second dose</Text>
                <Icons name="check-circle" size={30} color={"green"}/>
            </View>
            <View style={styles.dose}>
                <Text style={styles.txt}>Booster dose</Text>
                <Icons style={styles.icon} name="check-circle" size={30} color={"grey"}/>
            </View>
            <TouchableHighlight>
            <View style={styles.btn}>
                <Text style={{color:"white",fontSize:24,fontWeight:"400"}}>Update</Text>
            </View>
            </TouchableHighlight>
            <TouchableHighlight>
            <View style={styles.btn2}>
                <Text style={{color:"white",fontSize:24,fontWeight:"400"}}>Cancel</Text>
            </View>
            </TouchableHighlight>
        </View>
    );
}

export default VaccUpdate;