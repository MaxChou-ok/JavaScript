const http = require('http');
let app = http.createServer(function(request,response){
   if(request.url!=='/favicon.icon'){
    let num = (/user=(\d)/.exec(request.url.split('?')[1]))[1];
        console.log(num);
        if(num === '1'){
            response.write('{"name":"hyw"}');
        }else if(num === '0'){
            response.write('{"name":"lilei"}');
        }
        response.end();
    } 
   }
);
app.listen(80)