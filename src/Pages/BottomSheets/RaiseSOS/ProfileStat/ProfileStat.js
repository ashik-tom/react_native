import React from "react";
import {View,Text,Image} from "react-native";
import Icons from "react-native-vector-icons/FontAwesome5";
import Icons2 from "react-native-vector-icons/Entypo";
import StepperProgress from "../../../../components/StepperProgress.js";
import { ScrollView } from "react-native";
import styles from "../ProfileStat/ProfileStatStyles";

function ProfileStat(props) {
    return (
        <View style={styles.container}>
            <View style={{borderColor:"white", marginTop:10,borderWidth:1,width:63,}}/>
            <Text style={styles.covStat}>Covid Status</Text>
            <View style={styles.divider}/>
            <View style={styles.statBlock}>
                <Text style={styles.name}>Samar Khan</Text>
                <View style={styles.blk2}>
                    <Text style={styles.statH}>Covid Status</Text>
                    <Icons name="check-circle" size={30} color={"green"}/>
                </View>
            </View>
            <View style={styles.divider2}/>
            <ScrollView>
            <StepperProgress style={styles.stepper}/>
            </ScrollView>
        </View>
    );
}

export default ProfileStat;