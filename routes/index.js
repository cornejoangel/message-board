var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Sup bro",
    user: "Finn Wolfhard",
    added: new Date()
  },
  {
    text: "Nice work, but the journey never ends",
    user: "Ryu",
    added: new Date()
  },
  {
    text: "I am homeless now",
    user: "Ken Masters",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Small Messageboard', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form');
});

router.post('/new', (req, res, next) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  });
  res.redirect('/');
});

module.exports = router;
