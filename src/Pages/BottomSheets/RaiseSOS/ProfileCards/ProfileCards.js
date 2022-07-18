import react from "react";
import { View ,Text,TouchableOpacity, Image} from "react-native";
import React from 'react';
import styles from "../ProfileCards/ProfileCardStyle.js";
import StepperProgress from "../../../../components/StepperProgress.js";
import { ScrollView } from "react-native";


function ProfileCards(props) {
    return (
        <View style={styles.container}>
            <View style={{borderColor:"white", marginTop:10,borderWidth:1,width:63,}}></View>
            <View style={styles.titleBlock}>
                <Image style={styles.img} source={require("../../../../assets/images/img.jpg")}></Image>
                <View style={styles.nameBox}>
                    <Text style={styles.name}>Samar Khan</Text>
                    <Text style={styles.designation}>frontend developer</Text>
                </View>
            </View>
            <View style={styles.divider}/>
            <View style={styles.vacContainer}>
                <View style={styles.sos}>
                    <Text style={{color:"white",fontSize:20,fontWeight:"400",}}>SOS</Text>
                    <Text style={{color:"white",fontSize:20,fontWeight:"400",}}>Raised</Text>
                </View>
                <View style={styles.sos2}>
                    <Text style={{color:"white",fontSize:20,fontWeight:"400"}}>Vaccinated</Text>
                    <Text style={{color:"white",fontSize:20,fontWeight:"400"}}>I II CovShield</Text>
                </View>
                <View style={styles.sos2}>
                    <Text style={{color:"white",fontSize:20,fontWeight:"400"}}>Office</Text>
                    <Text style={{color:"white",fontSize:20,fontWeight:"400"}}>Present</Text>
                </View>
            </View>
            <View style={styles.divider2}/>
            <ScrollView>

            <StepperProgress style={styles.stepper}/>
            </ScrollView>





        </View>
    );
}

export default ProfileCards;