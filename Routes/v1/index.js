const routes = require('express').Router();
const Methods = require('../../Resolvers/imports');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

// POST User Login
routes.post('/users/login', async (req, res) => {
  console.log("Request Body", req.body);
  let user = await Methods.User.loginUser(req.body);

  let statusCode = 200
  
  res.status(statusCode).json({ 
    status: "Success", 
    code: statusCode, 
    data: { 
      user
    }
  });
});

// POST User Create
routes.post('/users/create', async (req, res) => {
  
  let user = await Methods.User.createNewUser(req.body);

  let statusCode = 201
  console.log("Request Body", req.body);
  res.status(statusCode).json({ 
    status: "Created", 
    code: statusCode, 
    data: { 
      user 
    }
  });
});


module.exports = routes;