const express = require('express')
const router= express.Router()
const crawl= require('../controller/crawlcontroller.js')

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())


router.get('/crawl/:link',crawl)

module.exports=router