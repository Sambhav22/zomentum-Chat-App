import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextInput } from "react-native-paper";

export default class ChatComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.onSend = this.onSend.bind(this);
  }
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello",
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: "Sambhav Jain",
            avatar: require("../images/face.jpg"),
          },
        },
      ],
    });
  }
  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  render() {
    return (
      <View style={styles.container}>
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
                    source={require("../images/face.jpg")}
                    style={{ width: 80, height: 80, borderRadius: 50 }}
                  />
                </View>
                <View style={styles.user}>
                  <Text numberOfLines={1} style={styles.user_name}>
                    Aman Gupta
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.selection}></View>
        </View>

        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
            _id: 1,
          }}
        />
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
    fontSize: 24,
    marginRight: 100,
    marginTop: 12,
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
