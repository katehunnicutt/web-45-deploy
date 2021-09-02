require("dotenv").config()
// ^^ allows to stash "artifical env variables" in a file 
const express = require("express")
const cors = require("cors")


console.log(process.env.PORT)
console.log(process.env.API_SECRET)

const PORT = process.env.PORT || 5000

const server = express()

server.use(express.json())
server.use(cors())

server.get("/", (req, res) => {
  res.send("<h1> oms oms </h1>")
})

server.get("/api", (req, res) => {
  res.json({message: "gabe says he likes us"})
})

server.listen(process.env.PORT, () => {
  console.log(`listening on port ${PORT}`)
})