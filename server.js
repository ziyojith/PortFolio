const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
const cors = require('cors');
app.use(cors())
const {MongoClient} = require('mongodb');

const url = 'mongodb+srv://Jithin:beast@cluster0.ah3n25x.mongodb.net/PortFolio?retryWrites=true&w=majority';
const client = new MongoClient(url);

async function connect(){
    try{
        await client.connect();
        console.log("Mongo DB connected successfully")
    }
    catch(err)
    {
        console.log(err)
    }

}
app.get('/getAll', async function (req,res) {
    try{
    res.setHeader('content-type','application/json');
    res.setHeader('Access-control-Allow-Origin','*');
    const db = client.db('PortFolio');
    const collections = db.collection('Projects');
    const result = await collections.find({},{projection:{_id:0,id:1,Name:1,Detail:1,link:1}}).toArray();
    console.log(result)
    data = {status:true,message:"Sucess",list:result};
    res.json(data)

    }
    catch(err)
    {
        console.log(err);
        data = {status:false,message:"UnSucess"};
        res.json(data)

    }

})
app.get('/insert', async function (req,res) {
    try{
    res.setHeader('content-type','application/json');
    res.setHeader('Access-control-Allow-Origin','*');
    const db = client.db('PortFolio');
    const collections = db.collection('Projects');
    const result = await collections.insertOne(req.query)
    console.log(result)
    data = {status:true,message:"Success"};
    res.json(data)

    }
    catch(err)
    {
        console.log(err);
        data = {status:false,message:"UnSucess"};
        res.json(data)

    }

})
app.listen(5000,()=>{
    connect();
})