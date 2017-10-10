import React, { Component } from "react";
import { Body, Container, Content, Header, Text, Title, Right } from 'native-base';
import { expenses } from "../model/fixtures/expenses";
import ExpensesList from "../components/expenses/expenses-list";

const ExpensesScreen = () => (
  <Container>
    <Header>
      <Body>
        <Title>Expenses</Title>
      </Body>
    </Header>

    <Content>
      <ExpensesList expenses={expenses} />
    </Content>
  </Container>
);

export default ExpensesScreen;
