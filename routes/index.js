var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/memes', (req, res)=>{
  const API_URL = "https://api.cloudinary.com/v1_1/dwfqeeh5f"
  fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    // .then((response) => response.json())
    .then((memes) => console.log(memes));
})

module.exports = router;
