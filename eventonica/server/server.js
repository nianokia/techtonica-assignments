import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = 5000;

app.use(cors());

app.get(('/', (req, res) => {

}))

app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
});