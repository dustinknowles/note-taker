const fs = require("fs");
const path = require("path");
const express = require("express");
const { json } = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static((__dirname, "Develop/public")));





app.listen(PORT, () => console.log('App listening on PORT ${PORT}'));