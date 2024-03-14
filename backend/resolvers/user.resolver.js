import { users } from '../dummyData/data.js'

// user resolver functions determine how to fetch each field in the user data
const userResolver = {
    Query: {
        // resolver function to query and get all users
        users: () => {
            return users
        },

        // resolver function to query and get a user with a given id
        user: (_, { userId }) => {
            return users.find((user) => user._id === userId)
        }
    },
    Mutation: {},
}

export default userResolver