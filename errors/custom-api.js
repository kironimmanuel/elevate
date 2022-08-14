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

// Sub classing with extends
// The extends keyword is use in class declaration or class expressions to create a class as a child of another class
// We extend the existing Error object by adding a child class
