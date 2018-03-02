const {MongoClient, ObjectID} = require("mongodb")

const url = "mongodb://localhost:27017/" 
MongoClient.connect(url, (err, client)=>{

    if (err){
        return console.log("Unable to connect to the database");
    }

    console.log("Connected to the database");

    const db = client.db("TodoApp")

    // db.collection("Todos").deleteMany({
    //     desc: "Spmething to do"
    // }).then((res)=>{
    //     console.log(res);
        
    // })

    // db.collection("Todos").deleteOne({
    //     desc: "Spmething to do"
    // }).then((res)=>{
    //     console.log(res);
        
    // })


    db.collection("Todos").findOneAndDelete({
        desc: "Spmething to do"
    }).then((res)=>{
        console.log(res);
        
    })

    client.close()
    
})