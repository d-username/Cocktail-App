import Aside from "./components/Aside";
import Header from "./components/Header";
import SeeMore from "./components/SeeMore";
import Main from "./components/Main";

import { useEffect, useState } from "react";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [showInfo, setShowInfo] = useState("");
  const [inputText, setInputText] = useState("");
  const [searchIngredients, setSearchIngredients] = useState("");

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((res) => res.json())
      .then((data) => {
        setCocktails(data.drinks);
      });
  }, []);

  console.log(cocktails);

  let filteredCocktails = cocktails;

  if (inputText !== "") {
    let newArray = [];
    cocktails.forEach((cocktail) => {
      const lowercaseName = cocktail.strDrink.toLowerCase();
      if (lowercaseName.includes(inputText)) {
        newArray.push(cocktail);
      }
    });
    filteredCocktails = newArray;
  }

  return (
    <div className="app">
      <Aside
        setInputText={setInputText}
        setSearchIngredients={setSearchIngredients}
      />
      <Header />
      {showInfo && <SeeMore showInfo={showInfo} setShowInfo={setShowInfo} />}
      <Main filteredCocktails={filteredCocktails} setShowInfo={setShowInfo} />
    </div>
  );
}

export default App;
