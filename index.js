const express = require('express');
const app = express();

const PORT = 3000

//app.METODO('rota/caminho', (req, res) => {})

app.get('/users', (req, res) => {
    res.send("Nessa rota retorno usuários");
});

app.post('/users', (req, res) => {
    res.send("Nessa rota retorno usuários POST");
});

app.get('/user/:id', (req,res) => {
    console.log(req.params);
    res.send(`o parametro é ${req.params.id}`);
});

app.listen(PORT, () => {
    console.log(`SERVIDOR WEB OUVINDO NA PORTA ${PORT}`);
});