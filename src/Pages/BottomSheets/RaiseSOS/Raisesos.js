import react from "react";
import { StyleSheet,TextInput,View,Text,Platform,sTouchableOpacity,Image, Pressable,Button, TouchableWithoutFeedback, TouchableHighlight } from "react-native";
import DateTimeSelect from "../../../components/DateTimePicker";
import React,{useState} from 'react';
import styles from "../../BottomSheets/RaiseSOS/RaisesosStyles";

import DateTimePicker from '@react-native-community/datetimepicker';
import Icons from "react-native-vector-icons/FontAwesome5";
import Icons2 from "react-native-vector-icons/Entypo";
// import * as DocumentPicker from 'expo-document-picker';

import DocumentPicker, {
    DirectoryPickerResponse,
    DocumentPickerResponse,
    isInProgress,
    types,
  } from 'react-native-document-picker';
  



function Raisesos(props) {
    const [date,setDate]=useState(new Date());
    const[mode,setMode]=useState("date");
    const[show,setShow]=useState(false);
    const[text,setText]=useState("dd/mm/yyyy ");
    const[time,setTime]=useState("hh:mm  ");
    const[dateValue,setdateValue]=useState("dd/mm/yyyy");
    const[fileData,setfileData]=useState([]); 

    const onChange=(event,selectedDate)=>{
        const currentDate=selectedDate || date;
        setShow(false);
        setDate(currentDate);

        let tempDate= new Date(currentDate);
        let fDate=tempDate.getDate()+'/'+(tempDate.getMonth()+1)+'/'+tempDate.getFullYear();
        let fTime=tempDate.getHours()+' : '+ tempDate.getMinutes();   
        setText(fDate+ '\n'+fTime);
        setTime(fTime);
        setdateValue(fDate);
       
    }
    const showMode=(currentMode)=>{
        setShow(true);
        setMode(currentMode);    
    }
    const handleFilePicker=async()=>{
        try {
            console.log('working1')
            const response=await DocumentPicker?.pick({
                presentationStyle:"fullScreen",
                allowMultiSelection:true,
                type:types.images
            });
            console.log('working')
            console.log('working2',response)
            setfileData([response]);
            
        } catch (error) {
            console.log(error)
            
        }

    }
    return (
        <View style={styles.container}>
            <View style={{borderColor:"white", marginTop:10,borderWidth:1,width:63,}}></View>
            <Text style={styles.header}>Raise SOS</Text>
            <View style={styles.divider}></View>
            <View>
            <TouchableWithoutFeedback onPress={()=>showMode(Date)}>  
             <View style={styles.dateBox}>
                <Text style={styles.date}>{dateValue}</Text>
                <Image style={styles.calender} source={require('../../../assets/icons/calender.png')}></Image>
             </View>
             </TouchableWithoutFeedback>
            </View>
            <TouchableWithoutFeedback onPress={()=>showMode("time")}>
              <View style={styles.timeBox}>
                <Text style={styles.time}>{time}</Text>
                <Image style={styles.clock} source={require('../../../assets/icons/clock.png')}></Image>
                </View> 
            </TouchableWithoutFeedback>
            <View style={styles.cont2}>
                <Text style={styles.textW1}>I am tested positive,please be safe</Text>
                <Icons name="check-circle" size={30} color={"green"}/>
            </View>
            <View style={styles.cont3}>
                <Text style={styles.textW2}>I doubt I'm having symptoms of{"\n"}covid infection</Text>
                <Icons name="check-circle" size={30} color={"grey"} />
            </View>
            <View style={styles.docPickCont}>
                <Pressable onPress={()=>handleFilePicker()}>
                <Icons2 style={styles.icon3} name="arrow-with-circle-up" size={30} color={"white"}/>
                <Text style={styles.text3}>Upload files(pdf,image,etc.)</Text>
                </Pressable>
                {fileData.length>5 ?fileData.map((ls,index)=>{
                    return(
                        <View key={index}>
                            <Text>Name:{ls.name} </Text>
                        </View>
                    );
                }):null }
            </View>
            
                {fileData.length>5 ?fileData.map((ls,index)=>{
                    return(
                        <View key={index}>
                            <Text>Name:{ls.name} </Text>
                        </View>
                    );
                }):null }         

            <TouchableHighlight style={styles.button1} disabled={true}>
            <Text style={{color:"white",fontSize:24,fontWeight:"normal"}}>Raise SOS</Text>    
            </TouchableHighlight> 
            <TouchableHighlight style={styles.button2}>
            <Text style={{color:"white",fontSize:24,fontWeight:"normal"}}>Cancel</Text>
            </TouchableHighlight>   


            {show&&(<DateTimePicker
               testID='dateTimePicker'
               value={date}
               mode={mode}
               is24Hour={true}
               display='default'
               onChange={onChange}/>)}
            
        </View>
    );
}

export default Raisesos;