import React from 'react'
const PokemonCard = ({pokemon}) => {
  console.log(pokemon);
  
  return (
    <div className='headshot'>
      <div className='card-image'>
        <figure>
          <img src={pokemon.sprites.other.showdown.front_shiny} alt={`pokemon image of the ${pokemon.name}`} />
        </figure>
      </div>
      <div className="card-character--name">
        <h2 className='main-name'>{pokemon.name}</h2>
        <div className="sub-name">{
        
        pokemon.types.map((itemType)=>{
         return itemType.type.name;
        }).join(", ")
        
        }</div>
      </div>
      <div className="card-charecter--ability">
        <div>
          <div className='flex'>
          <h3>Height :<span>{pokemon.height}</span></h3>
          <h3>Weight : <span>{pokemon.weight}</span></h3>
          <h3>Speed : <span>{pokemon.stats[5].base_stat}</span></h3>
          </div>

            <div className='flex'>
          <h3>Experience : <span>{pokemon.base_experience}</span></h3>
          <h3>Attack : <span>{pokemon.stats[1].base_stat}</span></h3>
          <h3>Abilities : <span>{pokemon.abilities.map((curAbility)=>curAbility.ability.name).slice(0,1).join(", ")}</span></h3>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
