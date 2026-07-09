import express from "express";
import bookRouter from "./routes/booesRouter.js";
// import {readFromJson} from "./db/manageDb.js"




const app = express();
app.use(express.json());
app.use("/books",bookRouter);
const PORT = process.env.PORT || 3000;




app.listen(PORT,()=>{
    console.log(`server running in port ${PORT}`);  
})


// await readFromJson()

