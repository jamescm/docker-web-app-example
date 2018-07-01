const express = require('express')
const Sequelize = require('sequelize')
const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env
const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  host: 'database',
  dialect: 'mysql'
})

const app = express()
app.get('/', async (req, res) => {
  try {
    await sequelize.authenticate()
    res.send('Hello from MySQL!')
  } catch (err) {
    res.send(err)
  } 
})
app.listen(3000, () => console.log('Express listening on port 3000'))
