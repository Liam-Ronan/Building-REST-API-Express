import express from 'express';

const app = express()
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`node and express server is running on ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Your Server is running on ${PORT}`);
})