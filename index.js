const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send("I know hot to open Node... YAY!!")
})

app.listen(4000, () => console.log('listening port: 3000'));