var app=require('express')();

var http=require('http');

var server=http.createServer(app);
var io=require('socket.io')(http);
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"htdocs/index.html");
});

io.on('connection',(socket)=>{
    console.log("User Connected");
});
server.listen(3000,()=>{
    console.log("Listening on *:3000");
});