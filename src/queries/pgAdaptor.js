const pgPromise = require('pg-promise');
const pgp = pgPromise({}); // Empty object means no additional config required

const config = {
    host: "postgresql",
    port: 5432,
    database: "AirbnbDB",
    user: "postgresql",
    password: "postgresql"
};

const db = pgp(config);

exports.db = db;
