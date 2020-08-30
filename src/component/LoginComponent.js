import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

//import { TextInput } from "react-native-paper";

export default class LoginComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            source={require("../images/header.png")}
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            resizeMode={"stretch"}
          >
            <View style={styles.logo}>
              <Image
                source={require("../images/logo.png")}
                style={{ width: "130%", height: "130%" }}
                resizeMode={"stretch"}
              />
              <Text style={{ fontSize: 25, fontWeight: "100" }}>CHAT APP</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.footer}>
          <TextInput style={styles.TextInput} placeholder="Username" />
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            secureTextEntry
          />
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.replace("Message", {
                params: {
                  screen: "Message",
                },
              })
            }
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 2 }}
              colors={["#39b54a", "#006837"]}
              style={styles.login}
            >
              <Text style={styles.textLogin}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const { width, height } = Dimensions.get("window");
const width_logo = width * 0.5;
const height_logo = width_logo * 1.2;
const width_textInput = width * 0.8;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    height: "55%",
  },
  footer: {
    width: "100%",
    height: "45%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    alignItems: "center",
    width: width_logo,
    height: height_logo,
  },
  TextInput: {
    width: width_textInput,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 50,
    marginBottom: 15,
  },
  login: {
    width: width_textInput,
    paddingVertical: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogin: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
