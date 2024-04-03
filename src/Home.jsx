import { useState } from "react";
import { useGetPokemonByNameQuery } from "./pokemon";

const Home = () => {
  const [pokemonName, setPokemonName] = useState("");
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonName(e.currentTarget.elements.pokemonName.value);
  };

  return (
    <>
      <h1>HopePage</h1>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="pokemonName" />
        <button type="submit">Search</button>
      </form>

      <p>{pokemonName}</p>
    </>
  );
};

export default Home;
