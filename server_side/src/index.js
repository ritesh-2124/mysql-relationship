const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
const db = require('./config/db');
const userController = require('./Controllers/User.Controller');
const bookController = require('./Controllers/Book.Controller');
const junctionController = require("./Controllers/Junction.Controller")



app.use('/user', userController);
app.use("/" , junctionController)
app.use('/', bookController);


const port = process.env.PORT || 3004;
app.listen(port, async () => {
    try {
      await db.sequelize.authenticate();
      console.log(`Connection to database has been established successfully`);
    } catch (e) {
      console.log(`Unable to connect to the database: ${e}`);
    }
  });