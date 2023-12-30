import sql from 'mssql'
import config from './config.js'

async function main() {
  try {
    await sql.connect(config)
    console.log('Connected to the database.')

    const createTableScript = `
      CREATE TABLE Users (
          ID INT PRIMARY KEY IDENTITY(1,1),
          Name NVARCHAR(100),
          Email NVARCHAR(100)
      );

      INSERT INTO Users (Name, Email) VALUES
      ('Alice Johnson', 'alice.johnson@example.com'),
      ('Bob Smith', 'bob.smith@example.com'),
      ('Carol Brown', 'carol.brown@example.com'),
      ('David Wilson', 'david.wilson@example.com'),
      ('Eve Davis', 'eve.davis@example.com');
    `

    await sql.query(createTableScript)
    console.log('Table created and data inserted.')
  } catch (err) {
    console.error('Error executing SQL script: ', err)
  } finally {
    sql.close() // Close the database connection
  }
}

main()
