import mysql from 'mysql'

const password = '30318112'
const databaseName = 'mydatabase' // Specify the database here

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: password,
  database: databaseName,
})

con.connect((err) => {
  if (err) throw err
  console.log('Connected!')

  // Query the data
  const selectDataQuery = 'SELECT * FROM customers'
  con.query(selectDataQuery, (err, result) => {
    if (err) throw err
    console.log('Result:', result)
  })
})
