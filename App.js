import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginComponent from "./src/component/LoginComponent";
import RootStack from "./src/stack/RootStack";

export default function App() {
  return <RootStack />;
}
