require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Hello'));

app.listen(process.env.PORT, process.env.HOST, () =>
  console.log(`RUNNING ON ${process.env.PORT}`),
);
