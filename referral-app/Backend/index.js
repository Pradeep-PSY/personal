const express = require('express');
const { connection } = require('./config/db');
const cors = require('cors');
const referalController = require('./controller/referalController');
const userController = require('./controller/userController');
const authentication = require('./middleware/authentication');

const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use('/user',userController);
app.use(authentication)
app.use('/referal',referalController);

app.listen(process.env.PORT,async ()=>{
    try{
        await connection
        console.log('db is connected')
    }
    catch(err){
        console.log(err)
    }
    console.log('server is started')
})