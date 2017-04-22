var http=require('http');
var request=require('request');
http.createServer( (req, res) => {    //(req, res) =>  equals function(parameters){}
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  request.post(
      {
          url:'http://ycchen.im.ncnu.edu.tw/join.php',
          form: {
              name:'Mr.nobody',
              sex:'male'
          }
      },
      function (error, httpResponse, body) {
           if(error){
              return;
           }
           
           else if (!error && httpResponse.statusCode == 200) {
               res.write(body);
               res.end();
           }
           
       }
  
       
   );
  
  
}).listen(3000);
