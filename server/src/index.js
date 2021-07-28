const Express=require('express');
const app = Express();
var cors = require('cors')


app.use(cors())
app.get('/',(req,res)=>{
    res.send("hello in server")

})




const PORT = process.env.port || 3000;
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})