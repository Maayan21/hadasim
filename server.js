const app = require('./app')
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`listhen ${PORT}`)
})