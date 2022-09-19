const { gql } = require('apollo-server-express');


const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    games: [Game]
}

type Game {
    _id: ID
    title: String
    releaseYear: String
    link: String
    console: Console
    description: String
    rating: String
    coverImg: String
    gameplayImg: String
    gameplayVid: String
}

type Console {
    name: String
    releaseDate: String
    developer: String
    description: String
    consoleImg: String
    consoleImg2: String
    promo: String
    link: String
}

type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    games(username: String): [Game]
    game(_id: ID!): Game
    console(_id: ID!): Console
  }

  type Mutation{
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addGame(gameId: ID!): User
    removeGame(gameId: ID!): User
}

`;

module.exports = typeDefs;