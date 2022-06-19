# How to Use #
You need to do this checks:
 - [ ] Clone this repository
 - [ ] Checkout to branch dev
 - [ ] In console run command: "npm install"
 - [ ] Run application command: "npm run start:dev" or "npm run start:prod"
 - [ ] Connect with Postman on "localhost:8080"
 - [ ] Check simple functional --> POST, GET, PUT, DELETE

Also you must testing my CRUD Api with WEB interface!!!
You need open this [URL](http://localhost:8080) into any browser 
And you must testing this aplication in Intuitive simple interface.


# Pull Request Header #
Task: [Link To Task](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/crud-api/assignment.md)
Screenshot: picture.
Deploy: [Local deploy URL](http://localhost:8080). Avialable after run application.

Complete: 19.06.2022 / Deadline 19.06.2022
Score: 112 / 202

# Self Estimate #

## Basic Scope ##

 - [x] +10 The repository with the application contains a Readme.md file containing detailed instructions for installing, running and using the application
 - [x] +10 GET api/user implemented properly
 - [x] +10 GET api/user/${userId} implemented properly
 - [x] +10 POST api/user implemented properly
 - [x] +10 PUT api/user/{userId} implemented properly
 - [x] +10 DELETE api/user/${userId} implemented properly
 - [x] +6 Users are stored in the form described in the technical requirements
 - [x] +6 Value of port on which application is running is stored in .env file

## Advanced Scope ##

 - [ ] +30 Task implemented on Typescript
 - [x] +10 Processing of requests to non-existing endpoints implemented properly
 - [x] +10 Errors on the server side that occur during the processing of a request should be handled and processed properly
 - [x] +10 Development mode: npm script start:dev implemented properly
 - [x] +10 Production mode: npm script start:prod implemented properly

## Hacker Scope ##

 - [ ] +30 There are tests for API (not less than 3 scenarios)
 - [ ] +30 There is horizontal scaling for application with a load balancer

## Forfeits ##

 - [ ] -95% of total task score any external tools except nodemon, dotenv, cross-env, typescript, ts-node, eslint and its plugins, webpack and its plugins, prettier, uuid, @types/* as well as libraries used for testing
 - [ ] -30% of total task score Commits after deadline (except commits that affect only Readme.md, .gitignore, etc.)
 - [ ] -20 Missing PR or its description is incorrect
 - [ ] -20 No separate development branch
 - [ ] -20 Less than 3 commits in the development branch, not including commits that make changes only to Readme.md or similar files (tsconfig.json, .gitignore, .prettierrc.json, etc.)

 ** Total score: 112 / 202 **