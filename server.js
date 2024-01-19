const express = require('express');
const app = express();

app.get('/',(req, res) => {
  res.send("Kritika's Server is working");
});

app.listen(5000,()=>{
  console.log("port is working")
})
