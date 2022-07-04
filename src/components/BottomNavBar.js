import react from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  TouchableHighlight,

} from "react-native";

import React from "react";
import styles from "./BottomNavBarStyle";


function BottomNavBar(props) {
  return (
    <View style={styles.container}>
      <View style={styles.base}>
        <TouchableOpacity
          style={styles.rectangle}
        >
          <Image
            style={styles.icon} 
            source={require("../assets/icons/home.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.rectangle2}> 
        <Image
            style={styles.icon2}
            source={require("../assets/icons/profile.png")}
          />
       </TouchableOpacity >
       <TouchableOpacity activeOpacity={.95}>
        <View
          style={[styles.mainButton, { transform: [{ rotate: "45deg" }] }]}
        ></View>
       </TouchableOpacity>
      </View>
    </View>
  );
}

export default BottomNavBar;
