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

export default config
