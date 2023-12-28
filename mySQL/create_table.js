import mysql from 'mysql'
import password from './password.js'

const mypassword = password // Your MySQL password

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: mypassword,
  database: 'mydb',
})

con.connect((err) => {
  if (err) throw err
  console.log('Connected!')

  const sql =
    'CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))'
  con.query(sql, (err, result) => {
    if (err) throw err
    console.log('Table created!')
  })
})
