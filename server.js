const fs = require("fs");
const { join } = require("path");
const isoFetch = require("isomorphic-fetch");
let filepath = join(__dirname, "chirps.json")
let chirps = [{author: "", content: ""}, {author: "", content: ""}, {author: "", content: ""}, {author: "", content: ""}, {author: "", content: ""}];
