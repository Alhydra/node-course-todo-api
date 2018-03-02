const express = require("express")
const bodyParser =require("body-parser")
const {mongoose} = require("./db/mongoose")
const {Todo} = require("./models/Todo")
const {User} = require("./models/User.js")

const app = express()

app.use(bodyParser.json())
app.post("/todos", (req,res)=>{

    const todo = new Todo({
        desc: req.body.desc
    })

    todo.save()
        .then((doc)=>{

            res.status(200).send(doc)
            
        }, (err)=>{
            res.status(400).send(err)
        })
    
})


app.get("/todos",(req,res)=>{

    Todo.find()
        .then((docs)=>{
            res.send({
                docs,
                code:200
            })
        },(e)=>{
            res.status(400).send(e)

        })
})
app.listen(3000, ()=>{
    console.log("App started at port 3000");
    
})