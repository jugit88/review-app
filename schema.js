const {
	GraphQLSchema,
	GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

var users = [
  
    {
      id: '1',
      firstName: 'James',
      lastName: 'Dow',
      email: 'james.dow@yahoo.com'
    },
    {
      id: '2',
      firstName: 'Jon',
      lastName: 'Smith',
      email: 'jonsmith@gmail.com'
    }
  
];
const UserType = new GraphQLObjectType({
  name: 'User',
  description: '...',
  fields: () => ({
    id: {type: GraphQLString},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    email: {type: GraphQLString}
  })
})
const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
    user: {
      type: UserType,
      args: {
        id: {type: GraphQLString}
      },
      resolve: (root, args) => {
        return users.find((user) => {
          return user.id === args.id;
        })
      }
    }
  })
})
module.exports = new GraphQLSchema({
  query: QueryType
})