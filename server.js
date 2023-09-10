const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const db = require("./app/models")

const corsOptions = {
    origin: "http://localhost:8080"
}

db.sequelizeConfig.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  })

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req,res) => {
    res.json({ message: "Multi-App Backend On" })
})

require("./app/routes/tutorial.routes")(app)
require("./app/routes/struktur.routes")(app)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})

