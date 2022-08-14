// Built in method which is used to read the file
import { readFile } from 'fs/promises'
// Environmental variables
import dotenv from 'dotenv'
dotenv.config()
// Database
import connectDB from './db/connect.js'
// Mongoose Schema
import Job from './models/Job.js'

const start = async () => {
  try {
    // Connect to the database and pass in the mongoDB url
    await connectDB(process.env.MONGO_URL)
    // Remove previous entries
    await Job.deleteMany()
    const jsonProducts = JSON.parse(
      await readFile(new URL('./mock-data.json', import.meta.url))
    )
    await Job.create(jsonProducts)
    console.log('Database was populated successfully')
    // The process.exit() method instructs Node.js to terminate the process synchronously
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
