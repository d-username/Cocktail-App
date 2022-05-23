export default function Main({ filteredCocktails, setShowInfo }) {
  return (
    <ul className="main">
      {filteredCocktails.map((cocktail, index) => (
        <li key={index}>
          <div className="main--card">
            <img
              className="main--card-image"
              alt="coctail"
              src={cocktail.strDrinkThumb}
            />
            <p className="main--card-title">{cocktail.strDrink}</p>
            <button onClick={() => setShowInfo(cocktail.idDrink)}>
              SEE MORE
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
