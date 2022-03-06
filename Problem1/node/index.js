const http = require('http');
const url = require('url');

const server = http.createServer((req, res)=>{
   const queryObject = url.parse(req.url, true).query;
   console.log(queryObject.obj);

   // let hashmap = {}
   // const obj = queryObject.obj;

   // for (let i = 0; i < obj.length; i++) {
   //    let curr = obj[i];
   //    hashmap[curr.num] = curr.text;
   // }

   // ここに処理を記述してください。
   let ans = "answer";
   let result = "";
   for (let i = 1; i <= 30; i++) {
      if (i % 15 === 0) result += "Fizz Buzz, ";
      else if (i % 5 === 0) result += "Buzz, ";
      else if (i % 3 === 0) result += "Fizz, ";
      else result += i + ", ";
   }

   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Request-Method', '*');
   res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
   res.setHeader('Access-Control-Allow-Headers', '*');
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(ans);
   res.write(result);
   // res.hashmap(hashmap);
   res.end();
});
server.listen(8080);
