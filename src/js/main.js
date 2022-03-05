//Modules
const displayData = require("./module/displayData.js");

const URL = "http://109.236.74.74:9900/getdata";

fetch(URL)
  .then((responce) => responce.json())
  .then((data) => displayData(data))
  .catch((error) => console.error(error));
