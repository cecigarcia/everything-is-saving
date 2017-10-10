import React from "react";
import { List, ListItem } from 'native-base';
import Movement from "../movement";

const ExpensesList = ({ expenses }) => (
  <List
    dataArray={expenses}
    renderRow={item => <ListItem><Movement movement={item} /></ListItem>}
    removeClippedSubviews={false}
  />
);

export default ExpensesList;
