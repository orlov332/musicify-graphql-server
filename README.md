# Graphql Service

## Description
Imagine we have a couple of microservices that is created for the service Musicify, a new wikipedia for Music. We need to provide a confortable and convinient service for our users for managing and retrieving data for different entities.

You can find repository with microservices [here](https://github.com/rolling-scopes-school/node-graphql-service)

[Detailed description of the task](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/graphql-service/assignment.md) 

## Install and run microservices
1. Install and run Mongo DB.
2. Clone [this repository](https://github.com/rolling-scopes-school/node-graphql-service).
3. Follow [README.md](https://github.com/rolling-scopes-school/node-graphql-service/blob/main/README.md) to install and run microservices.

## Installation

`npm install`

## Setup environment
1. Rename `.env.examples` to `.env`.
2. If needed apply changes in `.env` file to confirm links to microservices and port(s) are ok

## Running the app

### development
`npm run start`

### watch mode
`npm run start:dev`

### production mode
`npm run start:prod`

## Test
To run GraphQL queries and mutation follow the link [http://localhost:3000/graphql](http://localhost:3000/graphql) 

Examples for each implemented queries and mutation can be found in folder [./query.examples/](query.examples)
