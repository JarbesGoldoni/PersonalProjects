import sql from 'mssql'
import config from './config.js'
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const askInput = (question) =>
  new Promise((resolve) => rl.question(question, resolve))

async function addUser(name, email) {
  try {
    await sql.connect(config)
    console.log('Connected to the database.')

    // Create a new request
    const request = new sql.Request()

    // Add input parameters
    request.input('name', sql.NVarChar, name)
    request.input('email', sql.NVarChar, email)

    // Execute the INSERT query with parameters
    await request.query(`
      INSERT INTO Users (Name, Email) VALUES (@name, @email);
    `)

    console.log('New user added:', name)
  } catch (err) {
    console.error('Error executing SQL script: ', err)
  } finally {
    sql.close() // Close the database connection
  }
}

// Example usage:
const name = await askInput('Enter the user name: ')
const email = await askInput('Enter the user email: ')
addUser(name, email)
