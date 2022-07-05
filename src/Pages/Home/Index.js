import React from "react";
import { ScrollView,Image, Text, View } from "react-native";
import styles from "./Styles";

function LandingHome(props) {
  return (
    <View style={styles.container}>
      <View style={styles.titleNotif}>
        
      <Text
        style={{
          
          color: "white",
          fontWeight: "400",
          fontSize: 18,
        }}
      >
        Covid Status
      </Text>
      <Image source={require("../../assets/icons/notif.png")}/>
        </View>  
      <Text
        style={{
          paddingTop: 5,
          color: "rgba(255,255,255,0.5)",
          fontSize: 18,
          fontWeight: "400",
        }}
      >
        first floor
      </Text>
      

      <ScrollView style={{ paddingTop: 20 }}>
        <View style={styles.parentList}>
          <View style={styles.homeListf}>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
          </View>
          <View style={styles.homeList}>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
          </View>
          <View style={styles.homeList}>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
          </View>
          <View style={styles.homeList}>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
          </View>
          <View style={styles.homeList}>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
            <View style={styles.imageName}>
              <View style={styles.circle}></View>
              <View style={styles.nameBox}></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default LandingHome;
