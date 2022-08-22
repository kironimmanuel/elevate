// The parent custom error class
class CustomAPIError extends Error {
  constructor(message) {
    super(message)
  }
}

export default CustomAPIError

// Error() constructor
// The Error constructor creates an error object
// new Error (message, fileName, lineNumber)
