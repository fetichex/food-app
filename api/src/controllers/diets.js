const { Diets } = require("../db.js");

const diets = [
  { name: "gluten free" },
  { name: "ketogenic" },
  { name: "lacto-vegetarian" },
  { name: "ovo-vegetarian" },
  { name: "paleo" },
  { name: "pescetarian" },
  { name: "primal" },
  { name: "vegan" },
  { name: "vegetarian" },
  { name: "low fodmap" },
  { name: "whole30" },
];

const getDiets = async () => {
  let res =  await Diets.findAll();
  console.log(res.length);
  if (res.length < 1) {
    await Diets.bulkCreate(diets);
    console.log("created");
  }
  res =  await Diets.findAll();
  console.log(res.length);
  return res;
};

module.exports = { getDiets };
