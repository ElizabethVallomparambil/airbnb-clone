const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgresql',
    host: 'postgresql',
    database: 'AirbnbDB',
    password: 'postgresql',
    port: 5432,
})

const getBookings = (req, res) => {
    pool.query('SELECT * FROM airbnb.bookings', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows)
    })
}

const createBooking = (req, res) => {
    const bookings = req.body
    for (const booking of bookings) {
        pool.query('INSERT INTO airbnb.bookings VALUES($1, $2, $3, $4, $5)', [booking.id, booking.start_date,
        booking.end_date, booking.booked_by, booking.listing], (error, results) => {
            if (error) {
                throw error
            }
        })
    }
    res.status(200).json("Booking Created")
}

const getById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM airbnb.bookings WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const deletById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM airbnb.bookings WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}


module.exports = {
    getBookings,
    createBooking,
    getById,
    deletById
}
