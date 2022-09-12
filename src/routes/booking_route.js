const express = require('express')
const router = express.Router()

let db = require("../queries/bookingqueries");

router.get("/", db.getBookings)

router.post("/", db.createBooking)

router.get("/:id", db.getById)

router.delete("/:id", db.deletById)

module.exports = router
