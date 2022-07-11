const bcrypt = require('bcryptjs');
const users = [
    {
        name : "Admin User",
        email : "Admin@test.com",
        password : bcrypt.hashSync('123456', 10),
        isAdmin : true
    },
    {
        name : "User1",
        email : "User1@test.com",
        password : bcrypt.hashSync('123456', 10),
        
    },
    {
        name : "User2",
        email : "User2@test.com",
        password : bcrypt.hashSync('123456', 10),
        
    },
    {
        name : "User3",
        email : "User3@test.com",
        password : bcrypt.hashSync('123456', 10),
        
    },
    {
        name : "User4",
        email : "User4@test.com",
        password : bcrypt.hashSync('123456', 10),
    }
]
module.exports = users