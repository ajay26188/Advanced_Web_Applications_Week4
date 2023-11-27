var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/recipe/:food', function(req, res) {
  const meal = req.params.food;

  const recipe = {name: meal, instructions: ['1.preheat oven 225C','2.slice mozzarellas','3.put tomato sauce on pizza base','4.put mozzarella slices on pizza','5.bake for 15 min'],ingredients: ['1 frozen pizza base','1 tomato sauce','2 mozzarellas']};
  res.json(recipe);
});

module.exports = router;

