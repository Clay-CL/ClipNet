import express from 'express';
import dotenv from 'dotenv';

dotenv.config()
const port = process.env.PORT || 3000

const app = express();
app.get("/", (req, res) => {
    let message = "Hello World";
    res.status(200).send({message});
});

app.listen(port, () => {
    console.log(`Connected and Listening on Port : ${port}`);
});
