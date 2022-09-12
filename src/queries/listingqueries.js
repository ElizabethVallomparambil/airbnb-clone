const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgresql',
    host: 'postgresql',
    database: 'AirbnbDB',
    password: 'postgresql',
    port: 5432,
})

const getListings = (req, res) => {
    pool.query('SELECT * FROM airbnb.listings', (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const createListing = (req, res) => {
    const listings = req.body

    for(const listing of listings){
        pool.query('INSERT INTO airbnb.listings VALUES($1, $2, $3, $4, $5)', [listing.id, listing.name,
        listing.description, listing.address, listing.price], (error, results) => {
            if(error){
                throw error
            }

        })
    }
    res.status(200).json("Listing created")
}

const getById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM airbnb.listings WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const deleteById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE  FROM airbnb.listings WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getListings,
    createListing,
    getById,
    deleteById
}
