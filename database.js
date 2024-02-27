// const {createPool}= require ('mysql');

// const pool=createPool({
//     host:"localhost",
//     user:"root",
//     password:"KMSS#84#srinu",
    
//     connectionLimit: 10
// })
// pool.query(`select * from login`,(err,res)=>{
//    return console.log(res)
// })
const { createPool } = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "srinu123",
    database: "kmss",
    connectionLimit: 10
});

pool.query(`SELECT * FROM users`, (err, res) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Result:', res);
});
