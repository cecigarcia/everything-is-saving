import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import { ExpensesScreen, IncomesScreen } from "./app/screens";
import { Container, Content, Text, List, ListItem } from 'native-base';

const MainScreenNavigator = TabNavigator({
  Expenses: { screen: ExpensesScreen },
  Incomes: { screen: IncomesScreen },
});

MainScreenNavigator.navigationOptions = {
  title: "My Expenses",
};

// A StackNavigator with a nested TabNavigator brokes
// native-base list´s styles :(
//TODO: Make App the main app component
const App = StackNavigator({
  Home: { screen: MainScreenNavigator },
});

class EverythingIsSaving extends React.Component {
  render(){
    return(
      <MainScreenNavigator />
    )
  }
}

AppRegistry.registerComponent('EverythingIsSaving', () => EverythingIsSaving);

