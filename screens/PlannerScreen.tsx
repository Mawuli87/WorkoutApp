import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function PlannerScreen({ navigation }: NativeStackHeaderProps) {
  const renderItem = ({ item }: { item: any }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.difficulty}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text>I am home screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
