//Modules
const displayData = require("./module/displayData.js");

const URL = "http://109.236.74.74:9900/getdata";
const newData = {};

fetch(URL)
  .then((responce) => responce.json())
  .then((data) => displayData(data))
  .catch((error) => console.error(error));

document.body.addEventListener("click", (e) => {
  const target = e.target;
  if (target.matches(".owner__edit")) {
    const formOwner = document.querySelector(".form-owner");
    formOwner.classList.add("active");
  }
  if (target.matches(".form-owner__button")) {
    for (let key in newData) {
      const field = document.querySelector(`.owner__data_${key}`);
      field.textContent = newData[key];
    }
  }
});

document.body.addEventListener("change", (e) => {
  const target = e.target;
  if (
    target.matches("#name-input") ||
    target.matches("#owner-input") ||
    target.matches("#email-input")
  ) {
    const key = target.id.split("-")[0];
    newData[key] = target.value;
    console.log(newData);
  }
});
