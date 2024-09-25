const express = require('express');
const app = express();
const PORT = 6000;

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello from server");
});

app.listen(PORT, () => {
    console.log(`Contact App listening at http://localhost:${PORT}`);
});