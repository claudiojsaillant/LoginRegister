# Sign up | Log In App

#### This is a simple, mobile compatible app.

## Technologies
- MongoDB
- Express.js
- React.js
- Node.js

## Libraries 
- Mongoose as (Object Data Mapper)
- Cookies.js 
- Boostrap for front-end elements
- React router
- Jwt-decode for decoding in react
- Json Web Tokens

## Features
- Sign up users and save them into a MongoDB database 
- Persistent token based login with Json Web Tokens and cookies
- Reusable view components with the use of React.js
- Server virtualization (Optional) with Docker
- Interactive API with the Mongoose (Object Data Mapper) module to interact with a document database.
- Promises to help more complex queries

## Requisites to run the app
- Node.js
- Docker (Optional)

## Installation
1) Clone the repo
2) Inside the /server directory run: npm install (this will install all the packages needed for both the server and the react client)
3) Set up .env file inside the /server directory
- NODE_ENV=production
- PORT=4000 (If changing the port make sure to change the proxy property in /client/package.json)
- MONGODB_URI={MongoDB connection}

4) Execution
- Execute npm run start from the /server directory

[Step by step installation video](https://www.youtube.com/watch?v=Zop9o4ML2hc)

##### OR (Server virtualization in Docker) 
- Delete the install script in /server/package.json
- Run docker build -t server .
- Run docker run -v $(pwd):/app --env-file ./.env -p {PORT_USED_IN_ENV}:{PORT_USED_IN_ENV} -d --name server node-app (This command only works for mac because of $(pwd))
- Change directory into /client
- Run npm start

## API Diagram


![API](https://i.ibb.co/tQf9Dsm/Untitled-Diagram-drawio.png)