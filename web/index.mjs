import express from 'express'
import mongo from 'mongodb'

const {DATABASE_USERNAME, DATABASE_PASSWORD} = process.env
const MongoClient =  mongo.MongoClient
MongoClient.connect(`mongodb://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@database:27017`, function(err, db) {
  if (err) console.error(err)
  else console.log('Connected to Mongo!')
})

const app = express()
app.get('/', (req, res)=> res.send('Hello, world!'))
app.listen(3000, () => console.log('Listening on port 3000'))
