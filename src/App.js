import Aside from "./components/Aside";
import Header from "./components/Header";
import SeeMore from "./components/SeeMore";
import Main from "./components/Main";
import Login from "./components/Login";
import MainWrapper from "./components/mainWrapper";

import { useEffect, useState } from "react";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [showInfo, setShowInfo] = useState("");
  const [displayInfo, setDisplayInfo] = useState(true);
  const [inputText, setInputText] = useState("");
  const [userIsOver18, setUserIsOver18] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [date, setDate] = useState();
  const [searchByIngredients, setSearchByIngredients] = useState("");

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchByIngredients}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCocktails(data.drinks);
      });
  }, [searchByIngredients]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((res) => res.json())
      .then((data) => {
        setCocktails(data.drinks);
      });
  }, []);

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
      {userIsOver18 ? (
        <MainWrapper>
          <Aside
            setInputText={setInputText}
            setCocktails={setCocktails}
            setSearchByIngredients={setSearchByIngredients}
          />
          <Header />
          {showInfo && displayInfo === true && (
            <SeeMore
              showInfo={showInfo}
              setShowInfo={setShowInfo}
              setSearchByIngredients={setSearchByIngredients}
            />
          )}
          <Main
            filteredCocktails={filteredCocktails}
            setShowInfo={setShowInfo}
            setDisplayInfo={setDisplayInfo}
          />
        </MainWrapper>
      ) : (
        <Login
          date={date}
          setDate={setDate}
          setUserIsOver18={setUserIsOver18}
          setLoginError={setLoginError}
          loginError={loginError}
        />
      )}
    </div>
  );
}

export default App;
