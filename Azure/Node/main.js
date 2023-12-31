import express from 'express'
import sql from 'mssql'
import password from './password.js'

const app = express()
const port = 3000 // port

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

app.get('/users', async (req, res) => {
  try {
    await sql.connect(config)
    const result = await sql.query`SELECT * FROM Users`
    res.json(result.recordset)
  } catch (err) {
    console.error('Error retrieving data from the database: ', err)
    res.status(500).send('Error retrieving data')
  } finally {
    sql.close()
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
