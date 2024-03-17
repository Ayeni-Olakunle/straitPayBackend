const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const port = process.env.PORT || 8000
const { errorHandler } = require("./middleware/errorMiddleWare")
const connectDB = require("./config/db")
const app = express()
const cors = require('cors');


connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: '*'
}));

app.use("/api/todo", require("./routes/todoRoutes"))

app.use(errorHandler)

app.listen(port, () => {
    console.log('listening on port ' + port);
})