<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
Middleware sits between the request and route handler. It is used to execute or modify request and responses. It also can call the next function. 
Sessions are used to help persist data across different requests.
Bcrypt is a security algorithm that protects user data.
JWT stamds for JSON web tokens. They are used to pass the informtion of authorized user.

2.  What does bcrypt do in order to prevent attacks?
Bcrypt protects against hashing to prevent attacks. It protects the passwords of users by overwriting the data before sending the data over the server.

3.  What are the three parts of the JSON Web Token?
Header, payload and signature. 