let fs = require('fs');
let http = require('http');
let html = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>pokemon</title>
 
</head>
  <body>
    <div id="root"></div>
    <script src="pokemon.js"></script>
  </body>
</html>
`;


fs.writeFile('pokemon.html', html, function (){});

http.createServer((req, res) => {

  if(req.url == "/"){

    let path = "pokemon.html"

    fs.readFile(path, (err,data) => {

      if(err){
        res.writeHead(500);
        res.end("File Error");
        return
      }

      else{

        res.writeHead(200, {'Content-Type' : 'text/html'})

        res.end(data);
      }
    })
  }

  if(req.url == "/pokemon.js"){

      let path = "pokemon.js";

      fs.readFile(path, (err, data) => {
        if(err){
          res.writeHead(500);
          res.end("File Error");
          return;
        }

        else{

          res.writeHead(200, {'Content-Type' : 'application/javascript'})
          res.end(data);
        }
      })
    }
  

  if(req.url == "/data.json")
  {
    let path = "pokemonNames.json";


    fs.readFile(path, (err,data) => {
      if(err){
        res.writeHead(500);
        res.end("File Error");
      }

      else{
        res.writeHead(200, {'Content-Type' : 'application/json'})
        res.end(data);
      }
    })
  }

  if(req.url == "/favicon.ico"){
    return;
  }

}).listen(3000, () => {
  console.log("서버 잘 열림");
  console.log("서버 주소는: http://localhost:3000");
});