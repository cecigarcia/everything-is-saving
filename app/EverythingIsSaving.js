import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import { ExpensesScreen, IncomesScreen } from "./screens";

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
//const App = StackNavigator({
  //Home: { screen: MainScreenNavigator },
//});

const EverythingIsSaving = () => <MainScreenNavigator />;

AppRegistry.registerComponent('EverythingIsSaving', () => EverythingIsSaving);

