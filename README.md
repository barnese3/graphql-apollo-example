# GraphQL + Apollo Server example

An example Apollo Server that takes a REST API and makes a GraphQL endpoint

This example uses Apollo's `RESTDataSource` to fetch data from the API --> https://api.randomuser.me/ and create the endpoint --> `randomUser`

## NPM dependencies
- apollo-server
- apollo-datasource-rest
- graphql

## Run the example
1. `npm install` dependencies  
2. `node index.js`  
3. navigate to http://localhost:4000/ to open Playground  


## Example query
```
query {
  randomUser {
    gender
    email
    phone
  }
}
```