const express = require("express")
const bodyParser =require("body-parser")
const _ = require("lodash")
const {mongoose} = require("./db/mongoose")
const {Todo} = require("./models/Todo")
const {User} = require("./models/User.js")

const port = process.env.PORT || 3000
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


app.delete("/todo/:id",(req,res)=>{

    const id = req.params.id
    console.log("Todo ID",id);
    
    Todo.findByIdAndRemove(id)
        .then((todo)=>{
            if(todo){
                res.send(todo)
            }else{
                return res.status(400).send()
            }
        }, (err)=>{
            res.status(400).send(e)
        })
    
})

app.patch("/todo/:id",(req,res)=>{
    const id = req.params.id
    console.log("Todo ID",id);

    const body = _.pick(req.body, ["desc", "finished"])

    if(_.isBoolean(body.finished) && body.finished){

        body.completedAt = new Date().getTime()
    }else{
        body.finished = false
        body.completedAt = null
    }

    Todo.findByIdAndUpdate(id, {
        $set: body
    },{new: true}).then((todo)=>{

        if(!todo){
            return res.status(400).send(e)
        }

        res.send({todo})
    }, (e)=>{
        
    })





    
})

app.listen(port, ()=>{
    console.log("App started at port "+port);
    
})