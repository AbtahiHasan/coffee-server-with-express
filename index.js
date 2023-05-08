const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send("coffee is running")
})

app.listen(port, () => {
    console.log(`this server runing in at ${port}`)
})