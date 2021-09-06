const express = require('express')     // Importing express library 
const path = require('path')           // Importing path library
const app = express()                  // Creating a web app

// Middleware (between front and back) 
// This middleware will configure the route for public resources
// express.static => stablishes a default directory for our resources 
app.use(express.static(path.join(__dirname, 'public')))


// Asking for a resource with get method 
// We are using an anonymous function
// __dirname => absolute route constant
app.get('/unwomanlyFaceOfWar', (request, response) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'))
})          

// Response for forms
app.get('/formulary', (request, response) => {
    response.sendFile(path.join(__dirname, 'views', 'form.html'))
})     

app.get('/info', (req, res) => {
    res.send("<h1>Data Obtained</h1>")
    console.log(req.query)
}) 

// Listens to request from the 8080 port
app.listen(8080, () => {
    console.log("Server online at 8080 port")
})