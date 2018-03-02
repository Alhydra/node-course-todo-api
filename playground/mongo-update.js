const {MongoClient, ObjectID} = require("mongodb")

const url = "mongodb://localhost:27017/" 
MongoClient.connect(url, (err, client)=>{

    if (err){
        return console.log("Unable to connect to the database");
    }

    console.log("Connected to the database");

    const db = client.db("TodoApp")

    


    db.collection("Todos").findOneAndUpdate({
        _id: new ObjectID("5a987e66784ff72070134abf")
    },{
        $set: {
            finished: true
        }
    }, {
        returnOriginal: false
    }).then((res)=>{
        console.log(res);
        
    })

    client.close()
    
})