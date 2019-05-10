# Overview
This is MEAN App base.
- MongoDB:
    File db connect with MongoDB in local
- Express + Node: BE
    RESTful API:
    + API_URL: `http://localhost:3000/api`
    + Enpoint:
      > `users`
        `users/:id`
      > `auth/register`
      > `auth/login`
      > `http://localhost:3000/api/auth/me`
    Flow:
      > Login || Register, it response a `token` -> use token to authen, authorize
      > Secure API: embed token to Requests via `VerifyToken` file in Enpoint ( Eg: /users)
- Angular: ~ FE

#View Demo
- Step 1: `ng build`
- Step 2: `node server`

View in `http://localhost:3000/`
