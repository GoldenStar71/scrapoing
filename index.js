const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const router =  require('./router');

const app = express();
// install middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/search',router);
const browserObject = require('./browser');
const scraperController = require('./pageController');

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();
// -- application port -- //
const port = process.env.PORT || 5600;
const server = app.listen(port,()=>{
    console.log(`server up and running on port ${port}!`);
    scraperController(browserInstance);
});