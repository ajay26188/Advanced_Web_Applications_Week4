var express = require('express');
var router = express.Router();

let newIngredients = [];
let newInstructions = [];

const getRecipe = (meal) => {
  return {name: meal, instructions: ['1.preheat oven 225C','2.slice mozzarellas','3.put tomato sauce on pizza base','4.put mozzarella slices on pizza','5.bake for 15 min'],ingredients: ['1 frozen pizza base','1 tomato sauce','2 mozzarellas']};
};

/* GET home page. */
router.get('/recipe/:food', function(req, res) {
  const meal = req.params.food;
  const recipe = getRecipe(meal);
  res.render('index', {recipe, newIngredients, newInstructions});
});

router.post('/recipe',function(req,res) {
  const {name, ingredients, instructions } = req.body;

  const newRecipe = {name, instructions: instructions.split('\n').filter(instruction => instruction.trim() !== ''),ingredients: ingredients.split('\n').filter(ingredient => ingredient.trim() !== '')};
  res.json(newRecipe);
});

module.exports = { router, getRecipe };
module.exports.newIngredients = newIngredients;
module.exports.newInstructions = newInstructions;
