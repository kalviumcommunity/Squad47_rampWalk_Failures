const express = require('express')
const application = express()
const port = 8000

const rampwalk =[
            {
              "index": 1,
              "Event": "Event 1",
              "Likes": 10,
              "Rating": 3.2,
              "Views": "1k"
            }
   
]


application.use(express.json())

application.get('/', (req, res) => {
  res.send(rampwalk)
})

application.post('/', (req, res) => {
  const create = req.body
  rampwalk.push(create)
  res.send(rampwalk)
})

application.put('/:index', (req, res) => {
  const index  = parseInt(req.params.index)
  const uptodate= req.body
  rampwalk[index] = uptodate
  res.json(rampwalk)
})

application.delete('/:index', (req, res) => {
  const  index = parseInt(req.params.index)
  rampwalk.splice(index, 1)
  res.json(rampwalk)
})

application.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = application