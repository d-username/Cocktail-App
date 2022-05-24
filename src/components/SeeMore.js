import { useEffect, useState } from "react";
// import Ingredients from "./Ingredients";

export default function SeeMore({ showInfo, setShowInfo }) {
  const [cocktail, setCocktail] = useState([]);
  // const [showIngredient, setShowIngredient] = useState("");

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${showInfo}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCocktail(data.drinks[0]);
      });
  }, []);

  console.log("cocktail: ", cocktail);

  function getIngredients() {
    let ingredients = [];
    const keys = Object.keys(cocktail);
    const keysOfIngredints = keys.filter((key) =>
      key.includes("strIngredient")
    );
    for (const [key, value] of Object.entries(cocktail)) {
      if (
        keysOfIngredints.includes(key) === true &&
        value !== null &&
        value !== ""
      ) {
        ingredients.push(value);
      }
    }
    console.log("INGREDIENTS: ", ingredients);
    return ingredients;
  }

  return (
    <div className={showInfo === "" ? "seemore--hidden" : "seemore--panel"}>
      <h1>{cocktail.strDrink}</h1>
      <img
        className="seemore--image"
        alt="coctail"
        src={cocktail.strDrinkThumb}
      />
      <p className="seemore--p">{cocktail.strInstructions}</p>
      <ul className="seemore--ingredients-container">
        {getIngredients().map((ingredient, index) => (
          <li key={index}>
            <button
              className="seemore--ingredient"
              // onClick={setShowIngredient(ingredient)}
            >
              {ingredient}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => setShowInfo("")}>BACK</button>
    </div>
  );
}
