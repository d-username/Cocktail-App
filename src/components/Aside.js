export default function Aside({ setInputText, setSearchByIngredients }) {
  return (
    <div className="aside">
      <div className="aside--search-bar">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search by name"
          onChange={(e) => setInputText(e.target.value.toLowerCase())}
        ></input>
      </div>
      <h3 className="aside--h3">Popular Ingredients</h3>
      <ul className="aside--grid">
        <li className="aside--inline-two">
          <img
            className="aside--bottle-img zoom"
            alt="vodka bottle"
            src="https://www.thecocktaildb.com/images/ingredients/Vodka.png"
            onClick={() => setSearchByIngredients("vodka")}
          />
          <p className="aside--p">Vodka</p>
        </li>
        <li className="aside--inline-two">
          <img
            className="aside--bottle-img zoom"
            alt="vodka bottle"
            src="https://www.thecocktaildb.com/images/ingredients/Gin.png"
            onClick={() => setSearchByIngredients("gin")}
          />
          <p className="aside--p">Gin</p>
        </li>

        <li className="aside--inline-two">
          <img
            className="aside--bottle-img zoom"
            alt="vodka bottle"
            src="https://www.thecocktaildb.com/images/ingredients/Rum.png"
            onClick={() => setSearchByIngredients("rum")}
          />
          <p className="aside--p">Rum</p>
        </li>

        <li className="aside--inline-two">
          <img
            className="aside--bottle-img zoom"
            alt="vodka bottle"
            src="https://www.thecocktaildb.com/images/ingredients/Tequila.png"
            onClick={() => setSearchByIngredients("tequila")}
          />
          <p className="aside--p">Tequila</p>
        </li>
      </ul>
    </div>
  );
}
