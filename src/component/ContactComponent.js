import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";

export default class ContactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data_contact: [
        {
          id: "Rc0LjZ54yj",
          user_id: "trongtinh_Rc0LjZ54yj",
          user_name: "TRONG TINH",
          user_avatar: require("../images/avatar_default.png"),
          user_phonenumber: "+84 93456788",
        },
        {
          id: "MhiUfuWzr2",
          user_id: "tranthanh_MhiUfuWzr2",
          user_name: "TRAN THANH",
          user_avatar: require("../images/avatar_default.png"),
          user_phonenumber: "+84 78346789",
        },
        {
          id: "R3J4WUoWXJ",
          user_id: "huynhnhu_R3J4WUoWXJ",
          user_name: "HUYNH NHU",
          user_avatar: require("../images/avatar_default.png"),
          user_phonenumber: "+84 95661237",
        },
        {
          id: "ucPA0NXweB",
          user_id: "dinhtrong_ucPA0NXweB",
          user_name: "DINH TRONG",
          user_avatar: require("../images/avatar_default.png"),
          user_phonenumber: "+84 33674824",
        },

        {
          id: "wfbMalbY9l",
          user_id: "truonggiang_wfbMalbY9l",
          user_name: "TRUONG GIANG",
          user_avatar: require("../images/avatar_default.png"),
          user_phonenumber: "+84 78346789",
        },
        {
          id: "IlpBApYmye",
          user_id: "trongthat_IlpBApYmye",
          user_name: "TRONG THAT",
          user_avatar: require("../images/avatar_default.png"),
          user_phonenumber: "+84 4532012",
        },
      ],
    };
  }
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item_container}>
        <Image source={item.user_avatar} style={{ width: 80, height: 80 }} />
        <View style={styles.user}></View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          colors={["#39b54a", "#006837"]}
          style={styles.header}
        >
          <Text style={styles.textHeader}>CONTACT</Text>
          <TouchableOpacity style={styles.add}>
            <AntDesign name="pluscircle" color="white" size={25} />
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.flatList}>
          <FlatList
            data={this.state.data_contact}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
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
    height: 70,
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  add: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 15,
  },
  item_container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  user,
});
