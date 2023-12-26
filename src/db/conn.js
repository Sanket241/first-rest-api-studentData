const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/student")
.then(()=>{ 
    console.log("Fullfilled") 
})
.catch((err)=>{
    console.log(err)
})