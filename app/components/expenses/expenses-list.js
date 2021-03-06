import React from "react";
import { List, ListItem, Text } from 'native-base';
import Movement from "../movement";
import { View } from "react-native";

const Category = ({ category, expenses, firstItem }) => {
  if (!expenses || expenses.length === 0) {
    return null;
  }
  return (
    <View>
      <ListItem itemHeader first={firstItem}>
        <Text>{category.name.toUpperCase()}</Text>
      </ListItem>
      <List
        dataArray={expenses}
        renderRow={item =>
          <ListItem>
            <Movement movement={item} />
          </ListItem>
        }
        removeClippedSubviews={false}
      />
    </View>
  );
};

const ExpensesList = ({ expenses, categories }) => (
  <List>
    {categories.map((c, i) =>
      <Category
        key={i}
        category={c}
        expenses={expenses.filter(e => e.category.id === c.id)}
        firstItem={i === 0}
      />
    )}
  </List>
);

export default ExpensesList;
