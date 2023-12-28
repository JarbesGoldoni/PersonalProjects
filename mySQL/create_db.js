import mysql from 'mysql'
import password from './password.js' // you dont need to import a password

const mypassword = password //change it to be your password

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: mypassword,
})

con.connect((err) => {
  if (err) throw err
  console.log('Connected!')
  con.query('CREATE DATABASE mydb', (err, result) => {
    if (err) throw err
    console.log('Database created!')
  })
})
