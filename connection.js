const {Client} = require('pg')

const client = new Client({
    host: "ec2-54-228-162-209.eu-west-1.compute.amazonaws.com",
    user: "exjbpykxzuczsv",
    port: 5432,
    password: "64f264bb81c539bb5c7a253a38db44ed46a1676a79618db8280d79661fa9f523",
    database: "dd0qo3bi0gum0q"
})

module.exports = client;