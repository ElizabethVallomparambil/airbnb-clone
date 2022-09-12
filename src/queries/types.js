const graphql = require("graphql")
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLDate } = graphql;

const UserType = new GraphQLObjectType({
    name: "User",
    type: "Query",
    fields: {
        id: { type: GraphQLInt },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        user_role: { type: GraphQLString }
    }
});

const ListingType = new GraphQLObjectType({
    name: "Listing",
    type: "Query",
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        description: { type: GraphQLString },
        guest: { type: GraphQLInt },
        price: { type: GraphQLFloat }

    }

});

const BookingType = new GraphQLObjectType({
    name: "Booking",
    type: "Query",
    fields: {
        id: { type: GraphQLInt },
        start_date: { type: GraphQLString },
        end_date: { type: GraphQLString },
        user_id: { type: GraphQLInt },
        listing_id: { type: GraphQLInt }
    }
});

exports.UserType = UserType
exports.ListingType = ListingType
exports.BookingType = BookingType

