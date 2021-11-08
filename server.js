const express = require('express');
const path = require('path');



const app = express();

app.use(express.static('./heroku'));
app.get('/*',(req,res)=>
    res.sendFile('index.html',{root : './heroku' }),    
    );

app.listen(process.env.PORT || 8000);  