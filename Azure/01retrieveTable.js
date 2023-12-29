import sql from 'mssql'
import password from './password.js'

const config = {
  user: 'youknow',
  password: password,
  server: 'youknow.database.windows.net',
  database: 'youknowDB',
  options: {
    encrypt: true,
    trustServerCertificate: false,
  },
}

async function fetchUsers() {
  try {
    await sql.connect(config)
    const result = await sql.query`SELECT * FROM Users`

    console.log('Retrieved data:')
    console.table(result.recordset) // Display the results in a table format
    console.log(JSON.stringify(result.recordset, null, 2))
  } catch (err) {
    console.error('Error retrieving data from the database: ', err)
  } finally {
    sql.close() // Close the database connection
  }
}

fetchUsers()
