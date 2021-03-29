const express = require('express');

const app = express()

const users = ["Sahinur", "Arif", "Mim", "Kolamit", "Hasmot"]

// single api
app.get('/', (req, res) => {
    const fruit ={
        products: 'ada',
        price: 225
    }
    res.send(fruit);
});
// route api or parameters api
app.get('/fruits/banana', (req, res) => {
    res.send({fruit: 'banana', quantity:1000, price:100000});
});

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
res.send({id, name});
});

app.listen(4000, () => console.log('listening port: 4000'));