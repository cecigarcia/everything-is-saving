import express from "express";
import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";
import { incomes } from "./app/model/fixtures/incomes";
import { expenses } from "./app/model/fixtures/expenses";
import { categories } from "./app/model/fixtures/expenses-categories";

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Income {
    id: Int!
    description: String
    amount: Float
    date: String
  }
  type Expense {
    id: Int!
    description: String
    amount: Float
    date: String
    category: Category
  }
  type Category {
    id: Int!
    name: String
    expenses: [Expense]
  }
  type Query {
    expenses: [Expense]
    categories: [Category]
    expenses(categoryId: Int): [Expense]
  }
`);

const fetchExpenses = id => expenses.filter(e => e.category.id === id);

// The root provides a resolver function for each API endpoint
const rootValue = {
  incomes: () => incomes,
  categories: () => categories.map(c => ({ ...c, expenses: fetchExpenses(c.id) })),
  expenses: ({categoryId}) => fetchExpenses(categoryId),
};

const app = express();
app.use('/graphql', graphqlHTTP({ schema, rootValue, graphiql: true }));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');

