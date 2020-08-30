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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class NotificationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data_notification: [
        {
          id: "x1fie5vhFr",
          user_id: "trongtinh_Rc0LjZ54yj",
          user_name: "Samyak Jain",
          user_avatar: require("../images/avatar_default.png"),
          notificaton: "like your avatar.",
          readed: false,
          created_at: "Few seconds",
        },
        {
          id: "gjYQQVjxTD",
          user_id: "huynhnhu_R3J4WUoWXJ",
          user_name: "Riddhi Jain",
          user_avatar: require("../images/cathy.jpg"),
          notificaton: "comment your avatar.",
          readed: true,
          created_at: "1 day ago",
        },
      ],
    };
  }
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item_container}>
        <Image source={item.user_avatar} style={{ width: 80, height: 80 }} />
        <View style={styles.user}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "black", fontWeight: "bold" }}>
              {item.user_name}
            </Text>
            <Text style={{ paddingLeft: 5, color: "grey" }}>
              {item.notificaton}
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: "grey", fontStyle: "italic" }}>
              {item.created_at}
            </Text>
          </View>
        </View>
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
          <Text style={styles.textHeader}>NOTIFICATION</Text>
        </LinearGradient>
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.data_notification}
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
  item_container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  user: {
    flex: 1,
    marginTop: 15,
    paddingLeft: 15,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  flatList: {
    flex: 1,
  },
});
