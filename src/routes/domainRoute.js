const express = require('express')
const router= express.Router()
const domain= require('../controller/domainController.js')

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())


router.post('/domain',domain)

module.exports=router