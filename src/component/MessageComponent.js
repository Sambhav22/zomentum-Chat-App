import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-paper";

export default class MessageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data_message: [
        {
          id: "rwBa06nqlR",
          user_id: "trongtinh_Rc0LjZ54yj",
          user_name: "Aman Gupta",
          user_avatar: require("../images/face.jpg"),
          sender_id: "trongtinh_Rc0LjZ54yj",
          messages: "Hello",
          readed: false,
          num_messages_readed: 6,
          created_at: "Few seconds",
        },
        {
          id: "qKwgXmIoN0",
          user_id: "huynhnhu_R3J4WUoWXJ",
          user_name: "Aryan Garg",
          user_avatar: require("../images/paul.jpg"),
          sender_id: "trongthanh_O7xyqYRvo1",
          messages: "What are you doing?",
          readed: true,
          num_messages_readed: 0,
          created_at: "1 minute",
        },
        {
          id: "ucPA0NXweB",
          user_id: "trongthat_IlpBApYmye",
          user_name: "Ayush Mishra",
          user_avatar: require("../images/james.jpg"),
          sender_id: "trongthat_IlpBApYmye",
          messages: "Why?",
          readed: false,
          num_messages_readed: 3,
          created_at: "1 day ago",
        },
      ],
    };
  }
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item_container}>
        <Image
          source={item.user_avatar}
          style={{ width: 50, height: 50 }}
          resizeMode={"stretch"}
        />
        <View style={styles.item_messages}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "black",
                fontWeight: item.readed ? null : "bold",
              }}
            >
              {item.user_name}
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 12,
                fontWeight: item.readed ? null : "bold",
                marginTop: 3,
              }}
            >
              {item.messages}
            </Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text
              style={{
                color: "black",
                fontSize: 12,
                fontStyle: "italic",
                fontWeight: item.readed ? null : "bold",
                textAlign: "right",
              }}
            >
              {item.created_at}
            </Text>
            {item.readed ? null : (
              <View style={styles.num_readed}>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 12 }}
                >
                  {item.num_messages_readed > 5
                    ? "5+"
                    : item.num_messages_readed}
                </Text>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  ItemSeparatorComponent = () => {
    return <View style={{ height: 1, paddingVertical: 10 }}></View>;
  };
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
                    style={{ width: 80, height: 80, borderRadius: 50 }}
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
          <View style={styles.selection}>
            <View style={styles.searchBar}>
              <Ionicons name="ios-search" color="gray" size={20} />
              <TextInput
                underlineColorAndroid="#f2f2f2"
                style={{
                  flex: 1,
                  paddingHorizontal: 10,
                  height: 30,
                  backgroundColor: "#f2f2f2",
                }}
                placeholder="Search..."
              />
              <TouchableOpacity>
                <Ionicons name="ios-close" color="gray" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <FlatList
            data={this.state.data_message}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={this.ItemSeparatorComponent}
          />
        </View>
      </View>
    );
  }
}
const { width } = Dimensions.get("window");
const width_searchBar = width * 0.8;
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
  item_container: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  item_messages: {
    flex: 1,
    paddingLeft: 15,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  num_readed: {
    height: 20,
    backgroundColor: "red",
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 3,
  },
  selection: {
    height: "35%",
    alignItems: "center",
  },
  searchBar: {
    width: width_searchBar,
    height: 40,
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    marginTop: 15,
    borderRadius: 50,
    alignItems: "center",
    paddingHorizontal: 15,
  },
});
