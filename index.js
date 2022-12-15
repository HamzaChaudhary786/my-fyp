
const cors = require('cors');
const express = require ('express');


const app =express();

 app.use(cors())
 
const port= process.env.PORT || 3001;


const apiData = require('./firstapi.json')
app.get("/",(req , res)=>{
    res.send("API");
});



app.get("/apidata",(req , res) =>{
    res.send(apiData);

});

app.listen(port , ()=>{
console.log("api data")
});