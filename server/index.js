const express = require('express'),
cors = require('cors'),
bodyParser = require('body-parser'),
session = require('express-session'),
passport = require('passport'),
Auth0Strategy = require('passport-auth0'),
massive = require('massive'),
AWS = require('aws-sdk'),
port = 3005;

require('dotenv').config();
const app = express();
const s3 = new AWS.S3();

app.use(bodyParser.json());






app.listen(port, ()=> console.log('Listening on port: ' + port))