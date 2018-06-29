require('dotenv').config();
const server = require('express-graphql')
const CORS = require('micro-cors')()

const {schema} = require('./graphql/schema')
const {rootValue} = require('./graphql/resolvers')

// TODO: disable graphiql in production
module.exports = CORS(server({ schema, rootValue, graphiql: true }))
