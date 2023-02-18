import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './src/routes/main.routes.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

app.use(router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
