import mongoose from 'mongoose'

// mongoose connect method returns a promise, setup async await in server.js
const connectDB = url => {
  return mongoose.connect(url)
}

export default connectDB
