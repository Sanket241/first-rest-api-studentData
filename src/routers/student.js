const express = require('express')
const router = new express.Router();
const Student = require('../models/student')

router.post('/student', async (req, resp) => {
    try {
        const user = new Student(req.body)
        const data = await user.save();
        resp.status(201).send(data)
    }
    catch (err) {
        resp.status(201).end(err)
    }
    resp.send(req.body)
    console.log(req.body)
})
router.get('/student',async(req,resp)=>{
    try{
        const result = await Student.find();
        resp.status(200).send(result);
        console.log(result)
    }
    catch(err){
        resp.status(200).send(err);
    }
})
router.get('/student/:id',async(req,resp)=>{
    try{
        const result = req.params.id
        const data = await Student.findById(result);
        console.log(data)
        if(!data){
            resp.status(404).send()
        }
        else{
            resp.send(data)
        }
    }
    catch(e){
       resp.status(500).send(e)
    }
})
router.patch('/student/:id',async(req,resp)=>{
    try{
       const result = req.params.id
       const data = await Student.findByIdAndUpdate(result,req.body,{
            new : true      // --->iska data future me ata h
       });
    //    const ans = await data.updateOne(req.body)
       console.log(data)
       resp.send(data)
    }
    catch(e){
        resp.status(400).send(e)
    }
})
router.delete('/student/:id',async(req,resp)=>{
    try{
        const result = req.params.id
        const data = await Student.findByIdAndDelete(result,req.body,{
            new:true
        }) 
        resp.status(500).send(data)
        console.log(data)
    }
    catch(e){
        resp.status(404).send(e)
    }
})
module.exports=router;




// app.get('/',(req,resp)=>{
//     resp.send("MAIN")
// })

// app.post('/student', async (req, resp) => {
//     console.log(req.body)
//     resp.send(req.body)
//     const user = new Student(req.body)
//     user.save().then(() => {
//         resp.status(201).send(user)
//     }).catch((err) => {
//         resp.status(201).end(err)
//     })
// })


// const result = req.params.id
// const data = await Student.findByIdAndUpdate(result);
// const ans = await data.updateOne(req.body)
// console.log(ans)
// resp.send(ans)