import React from "react";
import { ScrollView,View,Text,Image, } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome5";
import styles from "./Styles";


function Notifications(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icons name="chevron-left" size={30} color={"white"}/>
                <Text style={styles.notifText}>Notifications</Text>
            </View>
            <View style={styles.notifContainer}>
                <ScrollView>
                    <View style={styles.notif}>
                        <Image source={require("../../assets/images/male.jpg")} style={styles.img}/>
                        <View style={styles.notifdatal}>
                            <Text style={styles.name}>Ann Mary</Text>
                            <Text style={styles.status}>I am Tested positive,Please be alert!!</Text>
                            <Text style={styles.date}>3 rd june 2022</Text>
                        </View>
                    </View>
                    <View style={styles.notif2}>
                        <Image source={require("../../assets/images/male.jpg")} style={styles.img}/>
                        <View style={styles.notifdatal}>
                            <Text style={styles.name}>Ann Mary</Text>
                            <Text style={styles.status}>I am Tested positive,Please be alert!!</Text>
                            <Text style={styles.date}>3 rd june 2022</Text>
                        </View>
                    </View>
                    <View style={styles.notif2}>
                        <Image source={require("../../assets/images/male.jpg")} style={styles.img}/>
                        <View style={styles.notifdatal}>
                            <Text style={styles.name}>Ann Mary</Text>
                            <Text style={styles.status}>I am Tested positive,Please be alert!!</Text>
                            <Text style={styles.date}>3 rd june 2022</Text>
                        </View>
                    </View>
                    <View style={styles.notif2}>
                        <Image source={require("../../assets/images/male.jpg")} style={styles.img}/>
                        <View style={styles.notifdatal}>
                            <Text style={styles.name}>Ann Mary</Text>
                            <Text style={styles.status}>I am Tested positive,Please be alert!!</Text>
                            <Text style={styles.date}>3 rd june 2022</Text>
                        </View>
                    </View>
                    <View style={styles.notif2}>
                        <Image source={require("../../assets/images/male.jpg")} style={styles.img}/>
                        <View style={styles.notifdatal}>
                            <Text style={styles.name}>Ann Mary</Text>
                            <Text style={styles.status}>I am Tested positive,Please be alert!!</Text>
                            <Text style={styles.date}>3 rd june 2022</Text>
                        </View>
                    </View>
                    <View style={styles.notif2}>
                        <Image source={require("../../assets/images/male.jpg")} style={styles.img}/>
                        <View style={styles.notifdatal}>
                            <Text style={styles.name}>Ann Mary</Text>
                            <Text style={styles.status}>I am Tested positive,Please be alert!!</Text>
                            <Text style={styles.date}>3 rd june 2022</Text>
                        </View>
                    </View>
                    <View style={styles.notif2}>
                        <Image source={require("../../assets/images/male.jpg")} style={styles.img}/>
                        <View style={styles.notifdatal}>
                            <Text style={styles.name}>Ann Mary</Text>
                            <Text style={styles.status}>I am Tested positive,Please be alert!!</Text>
                            <Text style={styles.date}>3 rd june 2022</Text>
                        </View>
                    </View>
                    <View style={styles.notif2}>
                        <Image source={require("../../assets/images/male.jpg")} style={styles.img}/>
                        <View style={styles.notifdatal}>
                            <Text style={styles.name}>Ann Mary</Text>
                            <Text style={styles.status}>I am Tested positive,Please be alert!!</Text>
                            <Text style={styles.date}>3 rd june 2022</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>



        </View>
       
    );
}

export default Notifications;