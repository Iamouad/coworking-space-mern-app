const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000
const coworkings = require('./database');

app.use(cors());
app.use(express.json({ extended: false }));

app.get('/cities/:city_name', async (req, res) => {
    console.log(req.params.city_name);
    const coworkingsFiltered = coworkings.filter(c => c.city == req.params.city_name);
    res.json({ coworkings: coworkingsFiltered });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
