const bcrypt = require("bcryptjs")

const password = "062420651yyyyy!"


// bcrypt.genSalt(10, (err,salt)=>{
//     bcrypt.hash(password,salt, (err,hash)=>{
//         console.log(hash);
        
//     })
// })

const hashed = "$2a$10$hGN/NTq1qqL45EheUwNXC.6Uob5ow9639P6ZRBjUrBz1fXDRZ0XtO"

bcrypt.compare(password,hashed, (err,res)=>{

    console.log(res);
    
})