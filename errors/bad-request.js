import { StatusCodes } from 'http-status-codes'
import CustomAPIError from './custom-api.js'

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message)
    // We add the statusCode property to the instance
    // We can also hard code this.statusCode = 400
    this.statusCode = StatusCodes.BAD_REQUEST // 400
  }
}

export default BadRequestError
