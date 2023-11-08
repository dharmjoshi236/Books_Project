const express = require('express');
const app = express();
const {server_port} = require("./constants/index");
require('./db');

app.use(express.json());

const bookRoutes = require('./routes/index');
app.use("/", bookRoutes);

app.listen(server_port, ()=> {
    console.log("Server is listening on port", server_port)
})