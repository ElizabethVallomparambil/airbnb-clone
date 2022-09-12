const db = require("./pgAdaptor");
const {UserType, BookingType, ListingType} = require("./types");
const { GraphQLObjectType, GraphQLID } = require("graphql");


const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgresql',
    host: 'postgresql',
    database: 'AirbnbDB',
    password: 'postgresql',
    port: 5432,
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    type: "Query",
    fields: {
        user:{
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, args) {
                const query = `SELECT * FROM airbnb.user_data WHERE id=$1`;
                const values = [args.id];
                pool.query("INSERT INTO airbnb.user_data (first_name,last_name,email,phone,user_role) VALUES('ad','df','add','8u9u','USER')",(error, results) => {
                
                    console.log(results.rows)
                })
                 pool.query("SELECT * from airbnb.user_data WHERE id=$1", values,(error, results) => {
                   return results.rows
                })
              }
        },
        listing:{
            type: ListingType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, args) {
                const query = `SELECT * FROM airbnb.listing WHERE id=$1`;
                const values = [args.id];
                return db
                  .one(query, values)
                  .then(res => res)
                  .catch(err => err);
              }

        },
        booking:{
            type: BookingType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, args) {
                const query = `SELECT * FROM airbnb.booking WHERE id=$1`;
                const values = [args.id];
                return db
                  .one(query, values)
                  .then(res => res)
                  .catch(err => err);
              }

        }
    }
})

exports.query = RootQuery




