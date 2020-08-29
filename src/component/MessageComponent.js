import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

export default class MessageComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="Light-content" />
        <View style={styles.header}>
          <View style={{ height: "65%" }}>
            <ImageBackground
              source={require("../images/header_message.png")}
              style={styles.imgBackground}
              resizeMode="stretch"
            >
              <View style={styles.imageBackroundContainer}>
                <View style={styles.logo}>
                  <Image
                    source={require("../images/avatar_default.png")}
                    style={{ width: 80, height: 80 }}
                  />
                </View>
                <View style={styles.user}>
                  <Text numberOfLines={1} style={styles.user_name}>
                    SAMBHAV JAIN
                  </Text>
                  <View style={styles.action}>
                    <TouchableOpacity style={styles.icon}>
                      <AntDesign name="scan1" color="white" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                      <FontAwesome name="photo" color="white" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                      <FontAwesome name="camera" color="white" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                      <Entypo name="log-out" color="white" size={20} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View style={styles.footer}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: "35%",
  },
  footer: {
    height: "65%",
  },
  imgBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  imageBackroundContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: "8%",
  },
  logo: {
    flex: 1,
    marginLeft: "1%",
    alignItems: "center",
  },
  user: {
    flex: 2,
    alignItems: "center",
  },
  user_name: {
    color: "yellow",
    fontWeight: "bold",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",

    marginTop: 5,
  },
  icon: {
    marginRight: 10,
  },
});
