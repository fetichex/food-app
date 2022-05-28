require('dotenv').config()
const server = require('./src/app.js')
const { conn } = require('./src/db.js')

const { PORT } = process.env || 3001

conn.sync().then(() => {
  console.log('Database has been synced')
  server.listen(PORT, () => {
    console.log(`server listening at ${PORT} port`)
  })
})
