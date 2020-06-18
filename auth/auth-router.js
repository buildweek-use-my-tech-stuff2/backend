const bcryptjs = require("bcryptjs");
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const secrets = require('../passcode/secret.js');

const Users = require("../users/users-model.js")
const { isValid } = require("../users/users-service.js")

router.post('/register', (req, res) => {
  // implement registration
  const cred = req.body;
  if (isValid(cred)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;

    const hash = bcryptjs.hashSync(cred.password, rounds);

    cred.password = hash;


    Users.add(cred)
    .then(user => {
      res.status(201).json({data: user});
    })
    .catch(error => {
      res.status(500).json({ message: error.message });

    })
  } else {
    res.status(400).json({ message:" provide username and password",
   });
  }
});

router.post('/login', (req, res) => {
  // implement login
const { username, password } = req.body;

if (isValid(req.body)) {
 Users.findBy({ username : username })
 .then(([user]) => {


  if (user && bcryptjs.compareSync(password, user.password)) {
    const token = generateToken(user);
    res.status(200).json({
      message: `welcome ${user.username}!`,
      token
    })
  } else {
    res.status(401).json({ message: 'who are you? check your username and password.'})
  }
 })
 .catch(error => {
   res.status(500).json({ message: error.message});
 });

} else {
  res.status(400).json({
    message:  "please provide username and password and the password should be alphanumeric"
  });
}
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role
  };
  const options = {
    expiresIn: '2h'
  };
  return jwt.sign(payload, secrets.jwtSecret,options)

}




module.exports = router;
