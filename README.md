# PicsPie Microservices version

## Technology

1. Frontend: React, Redux (logger)
2. Backend: Node.js, Express, Mongoose
3. Authetication: Passport, Google-OAuth2.0, local-strategy, cookie-session
4. Database: MongoDB, AWS S3, Redis
5. Testing: Jest, Puppeteer, safe-buffer, keygrip
6. Dev tools: Github, Postman, Travis CI, Heroku, BootStrap

## 2020.05.20

implemented the user authentication system with passport local-strategy and google-oauth-strategy
also Implemented image upload with AWS S3 and aws-sdk library.

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

3. Use Docker to optimze the deploy.
4. Make it into Microservices to enhance the performance
5. Add React & Redux liraries to optimize performance
