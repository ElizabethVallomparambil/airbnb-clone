const express = require('express')
const router = express.Router()

let db = require("../queries/userqueries");

router.get("/", db.getUsers)

router.post("/", db.createUser)

router.get("/:id", db.getById)

router.delete("/:id", db.deletById)

module.exports = router
