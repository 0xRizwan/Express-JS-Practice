const express = require("express")
const router = express.Router();


router.get("/", (req, res, next) => {
    console.log("second express log");
    res.send("<h1>Yayyyy, Mohammed Rizwan here</h1>")
})

module.exports = router;