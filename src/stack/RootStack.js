import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
//import {createAppContainer} from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
//import {createStackNavigator} from "react-navigation-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";

import LoginComponent from "../component/LoginComponent";
import ContactComponent from "../component/ContactComponent";
import MessagesComponent from "../component/MessageComponent";
import NotificationComponent from "../component/NotificationComponent";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
/*const Stacknavigator =createStackNavigator({
    LoginScreen:{
        screen:LoginComponent,
        navigationOptions:{
            headerShown:false
        }
    },
    HomeScreen:{
        screen:Tabnavigator,
        navigationOptions:{
            headerShown:false
        }
    }


})
*/

//const Tabnavigator=createMaterialBottomTabNavigator({

//  MessagesScreen:{
//    screen:MessagesComponent,
//  navigationOptions:{
// tabBarLabel:"Messages"
// }
//},
//ContactScreen:{
//  screen:ContactComponent,
//navigationOptions:{
//tabBarLabel:"Contact"
//}
// },

//NotificationScreen:{
//screen:NotificationComponent,
//navigationOptions:{
//  tabBarLabel:"Notification"
//    }
//  },

//});

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AccountTabScreen = ({ navigation, routes }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Message") {
            if (focused)
              return <MaterialIcons name="message" size={28} color="green" />;
            else return <MaterialIcons name="message" size={23} color="gray" />;
          } else if (route.name === "Contact") {
            if (focused)
              return <MaterialIcons name="contacts" size={28} color="green" />;
            else
              return <MaterialIcons name="contacts" size={23} color="gray" />;
          } else if (route.name === "Notification") {
            if (focused)
              return (
                <MaterialIcons name="notifications" size={28} color="green" />
              );
            else
              return (
                <MaterialIcons name="notifications" size={23} color="gray" />
              );
          }

          // You can return any component that you like here!
        },
      })}
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
          margin: 0,
          padding: 0,
        },
        style: styles.container,
        activeTintColor: "green",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Message" component={MessagesComponent} />
      <Tab.Screen name="Contact" component={ContactComponent} />
      <Tab.Screen name="Notification" component={NotificationComponent} />
    </Tab.Navigator>
  );
};

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginComponent} />
        <Stack.Screen name="Message" component={AccountTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//export default createAppContainer(Stacknavigator);
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    elevation: 10,
    borderTopWidth: 0,
  },
});
