const express = require('express')
const app = express();
// const Student = require('./models/student')
const Studentrouter = require('./routers/student')
const port = process.env.PORT || 3000;
require('./db/conn')

app.use(express.json())
app.use(Studentrouter)



app.listen(port, () => {
    console.log(`connection s setup at ${port}`)
});
