import React, { Component } from "react";
import { Body, Container, Content, Header, Text, Title, Right } from 'native-base';

const ExpensesScreen = () => (
  <Container>
    <Header>
      <Body>
        <Title>Expenses</Title>
      </Body>
    </Header>
    <Content>
      <Text>
        This is Content Section
      </Text>
    </Content>
  </Container>
);

export default ExpensesScreen;
