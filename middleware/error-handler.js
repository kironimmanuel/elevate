// Error() constructor
// The Error constructor creates an error object
// new Error (message, fileName, lineNumber)
import { StatusCodes } from 'http-status-codes'

const errorHandlerMiddleware = (err, req, res, next) => {
  const defaultError = {
    // 500 default error
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, please try again later',
  }
  if (err.name === 'ValidationError') {
    // Change to 400 error
    defaultError.statusCode = StatusCodes.BAD_REQUEST
    // Object.values() returns an array of the given object values
    defaultError.msg = Object.values(err.errors)
      .map(item => item.message)
      .join(',')
  }
  // Unique error - in this case it prevents duplicate emails
  // If error exists and it is 11000
  if (err.code && err.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST
    // Object.keys() returns an array of the given object keys
    defaultError.msg = `${Object.keys(err.keyValue)} has to be unique`
  }
  res.status(defaultError.statusCode).json({ msg: defaultError.msg })
}

export default errorHandlerMiddleware
