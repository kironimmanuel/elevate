# MERN Job Tracker Dashboard

#### npm installs backend

1. nodemon -> Node.js monitor script
2. express -> Framework
3. dotenv -> environmental variables
4. mongoose -> schema-base solution to model the application
5. validator -> email validator, regex
6. express-async-error -> custom error messages, negates need to repeat try,catch in controllers
7. http-status-codes -> constant for status codes, easier to read
8. bcryptjs -> password hashing, once a password is hashed it can't be "unhashed"
9. jsonwebtoken -> HTTP Bearer token
10. concurrently -> to run frontend and backend at the same time
<!-- 11. cors --> Using proxy in package.json alternative
11. morgan -> http logger middleware for node.js, debugging helper
12. moment -> moment.js formate dates(in jobsController for monthlyApplications)
13. mongoose-type-phone -> phone number validation (more testing required)
    SECURITY -> npm i helmet xss-clean express-mongo-sanitize express-rate-limit
14. helmet -> sets varius http headers
15. xss-clean -> middleware to sanitize user input from POST, GET and url params
16. express-mongo-sanitize -> sanitizes user-supplied data to prevent mongoDB operator injection
17. express-rate-limit -> middleware to limit requests from single IP

#### npm installs frontend

1. normalize.css -> makes css cross browser compatible QoL
2. styled-components -> css components for react
3. react-router-dom -> declarative routing for React
4. axios -> easy fetch requests, does a lot of heavy lifting
5. react-icons -> fancy icons
6. nanoid -> instead of key={index}
7. moment -> moment.js format dates
8. recharts -> [Recharts](https://recharts.org)

#### ES6 Syntax in Node.js

package.json -> "type" : "module" at the top

Imports require the .js extension

import file.js from "./file.js"

#### Middleware

404 not found error

Error handler for custom errors

#### Error handling

Once we setup a proper error handling, we can take it from project to project

#### Mongoose Middleware

Pre middleware functions are executed one after another, when each middleware call next

#### Consistency

userId: \_id -> to make it more obvious when reading the code

#### Mongoose

SchemaType.prototype.select() -> we can use this method to exclude the password from the return .select("-password")

#### Concurrently (setup in server package.json)

 <!-- ignore client won't restart the server, when changes in the frontend happen -->

"scripts": {
"server": "nodemon server --ignore client",
"client": "npm start --prefix client",
"start": "concurrently --kill-others-on-fail \"npm run server\" \" npm run client\""
},

#### React change PORT

"start": "set PORT=3006 && react-scripts start"

OR

install the cross-env package and "start": "cross-env PORT=3006 react-scripts start"

OR

Create a .env file at your project root and specify port number there. Like: PORT=3005

#### 1.1 Cors (Cross-Origin Resource Sharing)

For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example XMLHttpRequest and the Fetch API follow the same-origin policy. This means web applications using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers

#### 1.2 Proxy setup

Only for development

package.json in client
"proxy":"http://localhost:5000"

Conveniently, this avoids CORS issues and error messages like this in development:

#### Register/Login

if auto redirect to dashboard -> clear local storage (user,etc.)

#### Auto close & clearTimeout

Dropdown menu auto close

useEffect(() => {
const timer = setTimeout(() => {
setShowLogout(false)
}, 3000)
return () => clearTimeout(timer)
}, [showLogout])

#### JWT

Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema. The content of the header should look like the following:

Authorization: Bearer <token>

#### Login/Register routes in Postman

Tests
const jsonData = pm.response.json()
pm.globals.set("token",jsonData.token);

Authorization
{{token}}

#### SVGO

svgo logo.svg -o logo.min.svg

#### Reducer

HANDLE_CHANGE global handleChange function with dynamic object keys
[action.payload.name]:action.payload.value

#### useNavigate

import { useNavigate } from 'react-router-dom'

let navigate = useNavigate()

    const handleClick = () => {
      // Auto navigate after 3 seconds
      setTimeout(() => {
        navigate('/all-jobs')
      }, 3000)
    }

#### Mockaroo

- [Mockaroo](https://www.mockaroo.com/)
- setup mock-data.json in the root

#### populate.js

populate mongoDb with data

#### Aggregation Pipeline with mongoDB

The aggregation pipeline refers to a specific flow of operations that processes, transforms, and returns results. In a pipeline, successive operations are informed by the previous result. In the above example, input refers to one or more documents.
