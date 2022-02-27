const {Client} = require('pg')

const client = new Client(
    process.env.DATABASE_URL ? 
    {
    connectionString:process.env.DATABASE_URL,
    ssl:{
        rejectUnAuthorized:false
    }
}:{
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "London2020%",
    database: "postgres"
})

module.exports = client; 