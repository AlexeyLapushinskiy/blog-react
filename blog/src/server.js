/**
 * Created by Алексей on 30.01.2018.
 */

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log('We are live on ' + port);
});