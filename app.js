const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('Hello World CR7!'));
=======
app.get('/', (req, res) => res.send('Hello World Messi!!'));
>>>>>>> 89eb5eb61fcf1d0f7c237c6ed66e4fea554f98da

app.listen(port);
console.log(`App running on http://localhost:${port}`);
