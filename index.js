const { ApolloServer } = require('apollo-server');
const { gql } = require('apollo-server');
const RandomUserAPI = require('./random-user-api');

const typeDefs = gql`
  type Person {
    gender: String
    email: String
    phone: String
  }
  type Query {
    randomUser: [Person]
  }
`;

const resolvers = {
  Query: {
    randomUser: async (_source, _args, { dataSources }) => {
      let user = await dataSources.randomUserAPI.getRandomUser();
      return user;
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      randomUserAPI: new RandomUserAPI()
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
});