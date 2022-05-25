export default function Main({
  filteredCocktails,
  setShowInfo,
  setDisplayInfo,
}) {
  const handleDisplay = (drink) => {
    setDisplayInfo(true);
    setShowInfo(drink);
  };

  return (
    <ul className="main">
      {filteredCocktails.map((cocktail, index) => (
        <li key={index}>
          <div className="main--card box">
            <img
              className="main--card-image zoom--slow "
              alt="coctail"
              src={cocktail.strDrinkThumb}
            />
            <p className="main--card-title">{cocktail.strDrink}</p>
            <button
              onClick={() => handleDisplay(cocktail.idDrink)}
              className="main--button-seemore"
            >
              SEE MORE
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
