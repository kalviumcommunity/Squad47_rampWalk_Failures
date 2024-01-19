const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT ;

// define the ping route with the response in JSON

app.get('/', (req, res)=>{
  res.send("Kritikaaaaaaa");
})

if (require.main === module) {

  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
