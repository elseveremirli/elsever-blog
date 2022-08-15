const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()

const db = mysql.createConnection({
    user: "b5ed560acf9a93",
    host: "eu-cdbr-west-03.cleardb.net",
    password: "3a5360c5",
    database: "heroku_386f5da92ab81d8",
    insecureAuth : true,
})


db.connect((err)=>{
    if(err){console.log(err)};
    console.log('Connet');


app.post('/login',(req,res)=>{
    const name = req.body.name
    const password = req.body.password
    
        
        db.query("SELECT * FROM login WHERE name = ? AND password = ? ;",[name,password],(err,results)=>{
            if(err){ res.send({err:err}) };
           
                       
            if(results.length == 0){
                res.send({message : "Wrong Password or Name"})
            }else{
                res.send(results)
            }
        })
       
})



app.post('/register',(req,res)=>{
    const name = req.body.name
    const password = req.body.password
    
        
        db.query("INSERT INTO login (name,password) VALUES( ?, ?);",[name,password],(err,results)=>{
            if(results){console.log(results)};
            res.send(err)
            
        })
     
})

app.post('/addpost',(req,res)=>{
    const PostName = req.body.PostName
    const PostPhotoUrl = req.body.PostPhotoUrl
    const PostPlacer = req.body.PostPlacer
    const PostAbout = req.body.PostAbout
    const PostFullAbout = req.body.PostFullAbout

    db.query('INSERT INTO addpost (PostName,PostPhotoUrl,PostPlacer,PostAbout,PostFullAbout) VALUES( ?,?,?,?,?);',[PostName,PostPhotoUrl,PostPlacer,PostAbout,PostFullAbout],(err,results)=>{
        if(err){res.send(err)}
        if(results){res.send(results)};
    })
})


app.get('/post',(req,res)=>{
    db.query('SELECT * FROM addpost',(err,result)=>{
        if(err){res.send(err)}
        if(result){res.send(result)}
    })
})


}) 


app.use(express.static(path.join(__dirname, "/client/build")));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

const PORT = process.env.PORT || 3002

app.listen(PORT,()=>{
    console.log("Run")
})