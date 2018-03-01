const {MongoClient, ObjectID} = require("mongodb")

const url = "mongodb://localhost:27017/" 
MongoClient.connect(url, (err, client)=>{

    if (err){
        return console.log("Unable to connect to the database");
    }

    console.log("Connected to the database");

    const db = client.db("TodoApp")
    
    db.collection("Todos").find({finished:true}).toArray().then((res)=>{
        console.log("Todos");
        console.log(JSON.stringify(res,undefined,2));
        
        

    }, (err)=>{

        
    
    console.log("Unable to get records");
    

    })



    // db.collection("Todos").insertOne({
    //     desc: "Spmething to do",
    //     finished: false
    // }, (err,res)=>{
    //     if (err){
    //         return console.log("Unable to insert todo",err);
    //     }
        
    //     console.log(JSON.stringify(res.ops, undefined, 2));
        
        
    // })
    
    db.collection("TodoApp")

    client.close()
    
})