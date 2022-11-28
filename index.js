const express=require('express')
const app=express()
const http=require('http').createServer(app)
const port=7000
const path = require('path')
const crawl = require('./src/routes/crawlRoute.js')
const domain=require('./src/routes/domainRoute.js')
const home=require('./src/routes/home.js')


app.use(express.static(path.join(__dirname,'/public')));

app.use(home)
app.use(crawl)
app.use(domain)


http.listen(port,()=>{
    console.log('app listening on 7000')
})