import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
const typeDefs = `#graphql
  type Query{
    greeting: String,
    name: String
  }
`
const resolvers = {
  Query: {
    greeting: () => "Hello World!!",
    name: () => "Guddu Kumar!"
  }
}

//Create server
const server = new ApolloServer({ typeDefs, resolvers })
//Start the server
const { url } = await startStandaloneServer(server, { listen: { port: 9000 } })
console.log(`Server is running at ${url}`);