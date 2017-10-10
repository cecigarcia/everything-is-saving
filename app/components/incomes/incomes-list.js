import React from "react";
import { List, ListItem } from 'native-base';
import Movement from "../movement";

const IncomesList = ({ incomes }) => (
  <List
    dataArray={incomes}
    renderRow={item => <ListItem><Movement movement={item} /></ListItem>}
    removeClippedSubviews={false}
  />
);

export default IncomesList;
