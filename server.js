var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

const Schema =  require('./schema')

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: Schema,
  // rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => {
  console.log('Running a GraphQL API server at localhost:4000/graphql');
});
