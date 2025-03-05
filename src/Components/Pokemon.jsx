import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  // hooks
  const [search, setSearch] = useState("");
  const [pokemon,setPokemon] =useState([]);
  const [loading,setLoading]= useState(true);
  const [error,setError] = useState(null);

  // some variablle
  const API = "https://pokeapi.co/api/v2/pokemon?limit=500";

  //functions
  const getApiData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const eachPokemon = data.results.map( async(curPokemon) => {
          const res1=  await fetch(curPokemon.url);
          const data2 =await res1.json();
          return data2;
      });

      const pokemonPromise = await Promise.all(eachPokemon);
      setPokemon(pokemonPromise);
      setLoading(false);
      
    } catch (error) {

      setLoading(false);
      setError(error);
    }
  };

  //implement the search functionality
  const searchedData=pokemon.filter((curPokemon)=>{
   return curPokemon.name.toLowerCase().includes(search.toLowerCase())});
  // console.log(searchedData)
  console.log("Searched Data:", searchedData);
  //use effect
  useEffect(()=>{
    getApiData();
  },[])
 

  //loading and error handling
  if(loading){
    return (<div className="container">
          <div className="main-content grid">
            <h1>Loading...</h1>

          </div>
    </div>);
  }

  if(error){
    return (<div className="container">
          <div className="main-content grid">
            <h1>{error.message}</h1>

          </div>
    </div>);
  }
  return (
    <div className="container">
      {/* upper text div  */}
      <div className=" main-content  grid">
        <h1>Let's Search Your Pokemon Cards </h1>
        <div className="input-group grid">
          <input
            type="text"
            name="search"
            id="search"
            placeholder=""
            value={search}
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value)}
          />
          <label htmlFor="search">Search Here </label>
        </div>
      </div>

      {/* shows  pokemon cards div  */}
      <div className="display-card grid grid-cols--four">

        {
          searchedData.map((poke,index)=>{
            
          return  <PokemonCard key={index} pokemon={poke} />;

          })
        }

      </div>
    </div>
  );
};

export default Pokemon;
