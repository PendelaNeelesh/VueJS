const Express=require('express');
const app = Express();
const path = require('path')
var cors = require('cors')

app.use(Express.static('../public'))
app.use(Express.static('../public/public'))
app.use(Express.static('../public/public/src/*'))


app.use(cors())
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'))

})




const PORT = process.env.port || 5000;
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});