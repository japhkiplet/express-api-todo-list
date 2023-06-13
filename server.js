import  express  from "express";
import config from "./db/config.js";
import todoRoutes from "./routes/todoRouters.js";

const app= express()


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


todoRoutes (app);

app.get('/',(reg,res)=>{
    res.send("hello buddy😎")
})

app.listen(config.port,()=>{
    console.log(`server is running on ${config.url}`)
})