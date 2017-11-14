import React from "react";
import { Body, Container, Content, Header, Title } from 'native-base';
import { categories, expenses } from "../model/fixtures";
import ExpensesList from "../components/expenses/expenses-list";

const ExpensesScreen = () => (
  <Container>
    <Header>
      <Body>
        <Title>Expenses</Title>
      </Body>
    </Header>

    <Content>
      <ExpensesList expenses={expenses} categories={categories} />
    </Content>
  </Container>
);

export default ExpensesScreen;
