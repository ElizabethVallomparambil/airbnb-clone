const express = require('express')
const bodyParser = require('body-parser')
const graphql = require("graphql");
const expressGraphQl = require("express-graphql").graphqlHTTP;
const { GraphQLSchema } = graphql;
const { query } = require("./src/graphql/queries");
const app = express()
const PORT = 8080;
const HOST = '0.0.0.0';


app.set("view engine", "ejs")

const schema = new GraphQLSchema({
    query
  });

  app.use(
    '/',
    expressGraphQl({
      schema: schema,
      graphiql: true
    })
  );

app.listen(PORT, HOST);
