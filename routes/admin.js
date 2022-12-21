const express = require("express")
const router = express.Router();

router.get("/abc", (req, res, next) => {
    res.send('<form action = "/course" method = "POST" > <input type = "text" name = "title" /> <button type = "Add">Submit</button></form>')
});

router.post("/course", (req, res, next) => {
    console.log(req.body);
    res.redirect("/")
});

module.exports = router;