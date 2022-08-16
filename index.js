const http = require("http")
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-type':'Application\json'})
    resp.write(JSON.stringify({name : "ABhishek",ads:"asdasd"}))
    resp.end()
    
}
).listen(5000)