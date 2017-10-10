import React, { Component } from "react";
import { Header, Body, Container, Content, Text, List, ListItem, Title } from 'native-base';

const IncomesScreen = () => (
  <Container>
    <Header>
      <Body>
        <Title>Incomes</Title>
      </Body>
    </Header>

    <Content>
      <List>
        <ListItem>
          <Text>Simon Mignolet</Text>
        </ListItem>
        <ListItem>
          <Text>Nathaniel Clyne</Text>
        </ListItem>
        <ListItem>
          <Text>Dejan Lovren</Text>
        </ListItem>
      </List>
    </Content>
  </Container>
);

export default IncomesScreen;
