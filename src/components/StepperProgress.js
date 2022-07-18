
import { StyleSheet,Text,View,Button,Dimensions } from "react-native";
import React, { useState } from 'react';
import StepIndicator from 'react-native-step-indicator';
 
const {width,height}=Dimensions.get('window');
const labels = ["","","","",""];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 4,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: 'red',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: 'green',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: 'grey',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 5,
  currentStepIndicatorLabelFontSize: 5,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: 'red'
}

function StepperProgress(props) {
    
    const[currentPosition,setcurrentPosition]=useState(0)
    const data=[
        {
            label : "SOS raised",
            status:"I am tested positive,please be safe",
            dateTime: "sat,3rd nov 11:48PM"
        },
        {
            label : "SOS Lowered",
            status:"I am tested fine",
            dateTime: "sat,3rd nov 11:48PM"
        },
        {
            label : "SOS raised",
            status:"i doubt having Symptoms of covid infection",
            dateTime: "sat,3rd nov 11:48PM"
        },
        {
            label : "SOS lowered",
            status:"i Am tested fine",
            dateTime: "sat,3rd nov 11:48PM"
        },
        {
            label : "SOS Raised",
            status:"i Am tested ok",
            dateTime: "sat,3rd nov 11:48PM"
        },
    ]
    // console.disableYellowBox=true
    return (
        <View style={styles.container}>
            <View style={styles.stepperContainer}>
            <StepIndicator
            customStyles={customStyles}
            currentPosition={currentPosition}
            labels={labels}
            direction="vertical"
            renderLabel={({position,stepStatus,label,crntPosition})=>{
                return(
                    <View style={styles.lblContainer}>
                       <Text style={styles.lblText}>{data[position].label}</Text> 
                       <Text style={styles.status}>{data[position].status}</Text> 
                       <Text style={styles.status}>{data[position].dateTime}</Text> 
                    </View> ) }} />
            </View>
        </View>
        );
}

const styles = StyleSheet.create({
    stepperContainer:{
        elevation:20,
        paddingBottom:40,
        marginBottom:20
    },
    lblContainer:{
        marginTop:10,
        padding:10,
        paddingLeft:20,
        width:width-100
    },
    lblText:{
        fontSize:17,
        color:"#fff",
        fontWeight:'bold',
    },
    status:{
        fontSize:15,
        color:"grey"
    }
    
})
export default StepperProgress;