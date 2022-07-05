import react from 'react';
import{Stylesheet,Text,View,Image,TouchableOpacity} from "react-native";

import styles from './Styles';

function Profile(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textH}>Profile</Text>
                <Image style={styles.iconH} source={require("../../assets/icons/dots.png")}></Image>
            </View>
            
            <View style={styles.avatar}/>
            <Text style={styles.nameU}>Stephen Roger</Text>

            <View style={styles.statusContainer}>
                <View style={styles.statusContent}>
                    <Text style={styles.covStatText}>Covid Status</Text>
                    <Image style={styles.statIndicator} source={require("../../assets/icons/greentick.png")}></Image>
                </View>
            </View>
            <View style={styles.vacNameContainer}>
                <View style={styles.vacNameContent}>
                    <Text style={styles.vacName}>Vaccine: Cov-Shield</Text>
                </View>
            </View>
            <View style={styles.vacContainer}>
                <View style={styles.vacBox1}>
                    <View>
                        <Image style={styles.vacIndicator} source={require("../../assets/icons/greentick.png")}/>
                        <Text style={styles.vacDose}>First Dose</Text>
                    </View>
                </View>
                <View style={styles.vacBox2}>
                    <View>
                        <Image style={styles.vacIndicator} source={require("../../assets/icons/greentick.png")}/>
                        <Text style={styles.vacDose}>Second Dose</Text>
                    </View>
                </View>
                <View style={styles.vacBox3}>
                    <View>
                        <Image style={styles.vacIndicator} source={require("../../assets/icons/redtick.png")}/>
                        <Text style={styles.vacDose}>Booster Dose</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.updVacButton}>
                <Text style={styles.vacStatChange}>Change vaccination Status</Text>
            </TouchableOpacity>
            
        </View>
    );
}

export default Profile;