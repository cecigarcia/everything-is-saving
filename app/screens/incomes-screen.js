import React, { Component } from "react";
import { Header, Body, Container, Content, Title } from 'native-base';
import { incomes } from "../model/fixtures";
import IncomesList from "../components/incomes/incomes-list";

const IncomesScreen = () => (
  <Container>
    <Header>
      <Body>
        <Title>Incomes</Title>
      </Body>
    </Header>

    <Content>
      <IncomesList incomes={incomes} />
    </Content>
  </Container>
);

export default IncomesScreen;
