require('dotenv').config();
const server = require('express-graphql')
const CORS = require('micro-cors')()

const {schema} = require('./graphql/schema')
const {rootValue} = require('./graphql/resolvers')

const { NODE_ENV } = process.env

// TODO: disable graphiql in production by adding NODE_ENV key to .env
module.exports = CORS(
  server({
    schema,
    rootValue,
    graphiql: NODE_ENV === "production" ? false : true
  })
)
