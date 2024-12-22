import express from "express"
const app = express()
import http from "http"
import { Server } from "socket.io"
 

const server = http.createServer(app)

const io = new Server(server ,{
 cors : {
    origin : "http://localhost:5500",
    methods : ["GET","POST"]
 }
})
io.on("connection", (socket) => {
    console.log("User connected",socket.id);
    
    socket.on("message", (message) => {
        console.log("user message ==> ", message);
    
        io.emit("message", message);
      });
    
    socket.on("Disconnect", () => {
      console.log("User Disconnnect");
      
    })

})

app.get("/",(req,res)=>{
    res.send("hello world")
})

server.listen(3000,()=>{
    console.log("listening on 3000");
    
})