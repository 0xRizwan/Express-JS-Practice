const http = require("http");
const express = require("express")
const adminRoutes = require("./routes/admin");
const courseRoutes = require("./routes/course");
const bodyParser = require("body-parser")

const app = express();                     // Assume as Request handler function.
app.use(bodyParser.urlencoded({extended:false}))


// A simple working with Express.js with res.send and next()

/* app.use((req, res, next) => {
    console.log("first express log")
    next();                               // next is the function provided by Express.js to execute nextthings in middleware.
})

app.use((req, res, next) => {
    console.log("second express log");
    res.send("<h1>Yayyyy, Mohammed Rizwan here</h1>")
})

app.listen(3000);
*/

// calling functions with some pages path...
/*
app.use("/", (req, res, next) => {
    console.log("first express log")
})

app.use((req, res, next) => {
    console.log("second express log");
    res.send("<h1>Yayyyy, Mohammed Rizwan here</h1>")
})

app.listen(3000);

*/
// Passing the form data using express.js 
/*
app.use("/abc", (req, res, next) => {
    res.send('<form action = "/course" method = "POST" > <input type = "text" name = "title" /> <button type = "Add">Submit</button></form>')
})

app.use("/course", (req, res, next) => {
    console.log(req.body);
    res.redirect("/")
})

app.use((req, res, next) => {
    console.log("second express log");
    res.send("<h1>Yayyyy, Mohammed Rizwan here</h1>")
})

app.listen(3000);
*/

// Using app.get and app.post methods...app.get will only take the said path otherwise wont show that path.

app.use(adminRoutes);
app.use(courseRoutes)


app.listen(3000);


