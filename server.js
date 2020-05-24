const express = require("express");
const app = express();

const drinks = require("./models/drinks.js")
const food = require("./models/food.js")

app.use(express.static("public"));

const PORT = 3000;


//1 home route
app.get("/", (req, res) => {
  res.render("home_show.ejs");
});


//2 drinks route
app.get("/drinks/", (req, res) => {
  res.render("drink_index.ejs",
  {
    drinks:drinks
  });
})

//3 render drinks
app.get("/drinks/:id", (req, res) => {
  const name = drinks[req.params.id].name;
  const price = drinks[req.params.id].price;
  const image = drinks[req.params.id].image
  
  res.render("drink_show.ejs",
  {
    drinkName:name,
    drinkPrice:price,
    drinkImage:image + ".png"
    // drinks:drinks
  });
})


//4
app.get("/food/", (req, res) => {
  res.render("food_index.ejs",
  {
    foods:food
  });
})

//5
app.get("/food/:id", (req, res) => {
  // const name = food[req.params.id].name;
  // const price = food[req.params.id].price;
  // const image = food[req.params.id].image
  
  res.render("food_show.ejs",
  {
    // foodName:name,
    // foodPrice:price,
    // foodImage:image + ".png"
    showFood:food[req.params.id]
  });
})




app.listen(PORT, () => {
  console.log("I am listening...")
})