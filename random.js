const express = require('express');
const app = express();

const PORT = 3002;

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100);
    res.json({random: randomNumber});
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})