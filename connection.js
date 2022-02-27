const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "London2020%",
    database: "postgres"
})

module.exports = client;