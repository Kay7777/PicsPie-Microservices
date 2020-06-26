# PicsPie Microservices version

<h2>Introduction: </h2>
<h3>This version uses microservices structure to implement client, post, comment, and auth servers with the Local => Github test => Digitalocean deployment CI pipeline.
</h3>

## Technology

1. Frontend: React, Redux (logger), BootStrap, Material UI
2. Backend: Node.js, Express, Mongoose
3. Authetication: Passport, Google-OAuth2.0, local-strategy, cookie-session
4. Database: MongoDB, AWS S3, Redis
5. Testing: Postman, Travis CI, Github, Jest, Puppeteer, supertest
6. Cloud Provider: AWS Elastic Beanstalker, Digitalocean, Heroku

## 2020.05.20

1. implemented the user authentication system with passport local-strategy and google-oauth-strategy
2. Implemented image upload with AWS S3 and aws-sdk library.

## 2020.05.21

1. Implemented main page
2. Implemented user dashboard page,
3. Implemented post detials page.
4. Implemented the comment system.
5. Used Redis to optimize user dashboard data

## 2020.05.29

1. Added Redis-Server for picspie
2. Added Jest integretion testing
3. Connected to Travis CI

## 2020.06.05

1. Dockerize the client and server side, and use nginx as the reverse proxy

## 2020.06.24

1. divided the whole backend into Microservices
2. Card api adjustment

## 2020.06.25

1. Redis Typescript cache method (in process)
2. Add jest test files into each server
3. deployed microservices to Digitalocean cloud provider

## Next:

3. separate full-stack with e2e test, dockerized app with integration test on Travis and AWS, microservices with Travis and digitalocean.
4. Add Google Login

## TODO List -- features :

1. Multiple images upload
2. single video upload
3. Advanced comment system
4. Online chatting system
5. Like system

## TODO List -- technologies:

1. Add React & Redux liraries to optimize performance
