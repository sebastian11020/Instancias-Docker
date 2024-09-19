const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002; 

app.use(cors());

function letterMinus() {
    const asciiCode = Math.floor(Math.random() * 26) + 97;
    return String.fromCharCode(asciiCode);
}

app.get('/letra', (req, res) => {
    res.send(letterMinus());
});

app.listen(port,  () => {
    console.log(`Servidor de minúsculas escuchando en el puerto ${port}`);
});
