const express = require('express')
const router = express.Router()
const usersCtrl = require("../../controllers/api/users")
const ensureLoggedIn = require("../../config/ensureLoggedIn")

router.get("/search/:query", ensureLoggedIn, usersCtrl.searchQueriedUsers)

router.get("/user/:id", ensureLoggedIn, usersCtrl.getUserProfile)

router.post("/", usersCtrl.create)

router.post("/login", usersCtrl.login)

module.exports = router