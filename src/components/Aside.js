export default function Aside({ setInputText, setSearchIngredients }) {
  return (
    <div className="aside">
      <div>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search by name"
          onChange={(e) => setInputText(e.target.value.toLowerCase())}
        ></input>
      </div>
      <h3>Popular Ingredients</h3>
      <ul>
        <li onClick={() => setSearchIngredients("vodka")}>Vodka</li>
        <li onClick={() => setSearchIngredients("gin")}>Gin</li>
        <li onClick={() => setSearchIngredients("run")}>Rum</li>
        <li onClick={() => setSearchIngredients("tequila")}>Tequila</li>
      </ul>
    </div>
  );
}
