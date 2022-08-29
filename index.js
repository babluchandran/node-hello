const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = '<p> Express </p>'
  //const msg1 = 'Welcome to Express\n'
  res.end(msg.bold()   + '\r\n' + '<p> Welcome to Express </P>');
 
});


server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
