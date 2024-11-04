const express = require('express');
const app = express();

const PORT = 3000

//app.METODO('rota/caminho', (req, res) => {})

app.get('/users', (req, res) => {
    res.send("Nessa rota retorno usuários");
});

app.listen(PORT, () => {
    console.log(`SERVIDOR WEB OUVINDO NA PORTA ${PORT}`);
});