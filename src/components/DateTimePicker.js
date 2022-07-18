import React,{useState} from 'react';
import { StyleSheet,Text,View,Button,Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateTimeSelect(){
    const [date,setDate]=useState(new Date());
    const[mode,setMode]=useState("date");
    const[show,setShow]=useState(false);
    const[text,setText]=useState("Empty");
    const onChange=(event,selectedDate)=>{
        const currentDate=selectedDate || date;
        setShow(Platform.OS==="android");
        setDate(currentDate);

        let tempDate= new Date(currentDate);
        let fDate=tempDate.getDate()+'/'+(tempDate.getMonth()+1)+'/'+tempDate.getFullYear();
        let fTime='Hours: '+tempDate.getHours()+' |minutes: '+ tempDate.getMinutes();   
        setText(fDate+ '\n'+fTime)
        console.log(fDate+'('+fTime+')')
    }
    const showMode=(currentMode)=>{
        setShow(true);
        setMode(currentMode);
    }
    return(
        <View style={styles.container}>
        <Text style={{fontSize:20,fontWeight:"400",color:"#14bdef"}}>{text}</Text>
        <View style={{margin:20}}>
            <Button title='DatePicker' onPress={()=>showMode(date)}/>
        </View>
        <View style={{margin:20}}>
            <Button title='TimePicker' onPress={()=>showMode('time')}/>
        </View>
        {show&&(<DateTimePicker
        testID='dateTimePicker'
        value={date}
        mode={mode}
        is24Hour={true}
        display='default'
        onChange={onChange}
        />)}
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    }
});