const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const router = require('./route');
const PORT = process.env.SERVER_PORT;
const cors = require('cors');
const {sequelize} = require('./models');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors({
	origin: true, 
    credentials: true,  
}));

sequelize.sync({ force: false, })
    .then(() => {
        console.log('db access successful')
    }).catch((e) => {
        console.log(e,'db access failed')
    });

app.use('/',router);
app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})

