import React from "react";
import {
  Body,
  Card,
  List,
  ListItem,
  Text,
  Right,
} from 'native-base';
import { View, StyleSheet } from "react-native";

const Movement = ({ movement }) => (
  <View style={{flex: 1, flexDirection: 'row'}}>
    <Body>
      <Text>{movement.description}</Text>
      <Text note>{movement.amount}€</Text>
    </Body>
    <Right>
      <Text note>{movement.date}</Text>
    </Right>
  </View>
);

const styles = StyleSheet.create({
});

export default Movement;
