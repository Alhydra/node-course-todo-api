const {MongoClient, ObjectID} = require("mongodb")

const url = "mongodb://localhost:27017/" 
MongoClient.connect(url, (err, client)=>{

    if (err){
        return console.log("Unable to connect to the database");
    }

    console.log("Connected to the database");

    const db = client.db("TodoApp");

    db.collection("Todos").insertOne({
        desc: "Spmething to do",
        finished: false
    }, (err,res)=>{
        if (err){
            return console.log("Unable to insert todo",err);
        }
        
        console.log(JSON.stringify(res.ops, undefined, 2));
        
        
    })
    
    db.collection("Users").insertOne({
        name: "Youssef",
        age:23,
        location:"Morocco"
    }, (err,res)=>{
        if (err){
            return console.log("Unable to insert todo",err);
        }

        console.log(res.ops[0]._id.getTimestamp());
        
        
        
        
    })

    client.close()
    
})