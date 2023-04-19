const express = require('express');
const app = express();
const cors = require('cors');
const produtoRouter = require('./src/routes/produto.routes');

app.use(express.json());
app.use(cors());
app.use(produtoRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});