const express = require('express');

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({msg:"working"});
})

app.listen(3000,()=>{
    console.log(`server is running on http://localhost:3000`);
})