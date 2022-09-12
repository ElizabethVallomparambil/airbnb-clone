const express = require('express')
const router = express.Router()

let db = require("../queries/listingqueries");

router.get("/", db.getListings)

router.post("/", db.createListing)

router.get("/:id", db.getById)

router.delete("/:id", db.deleteById)

module.exports = router
