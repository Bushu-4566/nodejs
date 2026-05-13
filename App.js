const path=require('path');
const express=require('express');

const userrouter=require("./routes/userrouter");
const hostRouter=require("./routes/hostRouter");
const rootDir=require("./utils/pathutil");

const app=express();



app.use(express.urlencoded());
app.use(userrouter);
app.use("/host",hostRouter);
app.use(express.static(path.join(rootDir,'public')));
 
app.use((req,res,next)=>{
    res.status(404).send("<h1> 404 your page is not found on airbnb</h1>");
    res.sendFile(path.join(rootDir,"views",'404.html'));
});



const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server running on adress http://localhost:${PORT}`);

});