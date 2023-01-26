const express = require('express')
const router = express.Router()
const usersCtrl = require("../../controllers/api/users")

// router.get("/get-all-contacts", usersCtr)

router.post("/", usersCtrl.create)

router.post("/login", usersCtrl.login)

module.exports = router