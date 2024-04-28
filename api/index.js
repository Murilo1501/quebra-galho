const routes = require('./routes')
const cors = require('cors')

const express = require("express");
const app = express();
app.use(cors())
const PORT = 3000;

routes(app)

app.listen(PORT, () =>{
    console.log("server running at http://127.0.0.1:"+PORT)
})

