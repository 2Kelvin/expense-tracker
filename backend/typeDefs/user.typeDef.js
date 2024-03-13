// defining our user data, schema + queries
const userTypeDef = `#graphql
    # defining a user. '!' means it' a required field, cannot be null
    type User {
        _id: ID!
        username: String!
        name: String!
        password: String!
        profilePicture: String
        gender: String!
    }

    # what type of queries we can request from our graphql api [GET]
    type Query {
        # we can ask for an array of users. No user should be null
        users: [User!]
        # returning a user if authenticated else returning null
        authUser: User
        # fetching a user using their id
        user(userId:ID!): User
    }

    # how we can change the user data [POST, PUT, DELETE]
    type Mutation {
        signUp(input: SignUpInput!): User
        login(input: LoginInput!): User
        logout: LogoutResponse
    }

    # user details to send / use when signing in a user
    input SignUpInput {
        username: String!
        name: String!
        password: String!
        gender: String!
    }

    # user details to send / use when loging in a user
    input LoginInput {
        username: String!
        password: String!
    }

    # send a logout message when loging out a user
    type LogoutResponse {
        message: String!
    }
`

export default userTypeDef