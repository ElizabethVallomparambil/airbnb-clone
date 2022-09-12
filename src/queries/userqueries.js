const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgresql',
    host: 'postgresql',
    database: 'AirbnbDB',
    password: 'postgresql',
    port: 5432,
})

const getUsers = (req, res) => {
    pool.query("SELECT * from airbnb.user_data", (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query("SELECT * FROM airbnb.user_data WHERE id = $1", [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const deletById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query("DELETE FROM airbnb.user_data WHERE id = $1", [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const createUser = (req, res) => {
    const users = req.body
    console.log(req.body)
    for(const user of users){
        pool.query("INSERT INTO airbnb.user_data VALUES($1,$2,$3,$4,$5,$6)", [user.id,user.first_name,
            user.last_name,user.email, user.phone, user.user_role],
         (error, results) => {
            if (error) {
                console.log(error)
            }
        })
    }
    res.status(200).json("User created")
}

module.exports = {
    getUsers,
    createUser,
    getById,
    deletById
}

