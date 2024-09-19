const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; 

app.use(cors());

function letterMayus() {
    const asciiCode = Math.floor(Math.random() * 26) + 65;
    return String.fromCharCode(asciiCode);
}

app.get('/letra', (req, res) => {
    res.send(letterMayus());
});

app.listen(port, () => {
    console.log(`Servidor de mayúsculas escuchando en el puerto ${port}`);
});
