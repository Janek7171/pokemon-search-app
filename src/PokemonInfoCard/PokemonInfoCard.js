import React from 'react';
import { useState } from 'react';

const PokemonInfoCard = ({ pokemonInfo, abilitiesInfo }) => {
  const [tooltipIsVisible, setTooltipIsVisible] = useState();
  const handleMouseEnter = (e) => {
    const index = e.target.getAttribute('index');
    setTooltipIsVisible(parseInt(index));
  };

  const handleMouseOut = (e) => {
    setTooltipIsVisible('');
  };
  const getColorBasedOnType = (type) => {
    const colorMap = {
      normal: 'grey',
      fire: 'red',
      water: 'blue',
      electric: 'yellow',
      grass: 'green',
      ice: 'cyan',
      fighting: 'brown',
      poison: 'purple',
      ground: 'khaki',
      flying: 'cornflowerblue',
      psychic: 'fuchsia',
      bug: 'yellowgreen',
      rock: 'darkkhaki',
      ghost: 'darkslateblue',
      dragon: 'mediumslateblue',
      dark: 'saddlebrown',
      steel: 'lightsteelblue',
      fairy: 'hotpink',
    };

    return colorMap[type];
  };
  const showPokemonInfo = (pokemonInfo) => {
    if (pokemonInfo.name) {
      return (
        <div className="bg-slate-200 cursor-default border-4 border-slate-300  flex flex-col items-center rounded-3xl p-10 m-6">
          <img
            alt="brak obrazka"
            className="scale-[1.6]"
            src={pokemonInfo.sprites['front_default']}
          />
          <p className="font-serif pt-6 first-letter:uppercase text-xl">
            {pokemonInfo.name}
          </p>
          <div className="font-serif  text-center pt-4 text-blue-900">
            {pokemonInfo.types.map((type) => {
              const typeName = type.type['name'];
              const color = getColorBasedOnType(typeName);
              return (
                <p
                  key={typeName}
                  className="font-serif font-bold rounded-xl text-white p-1 px-3 m-1"
                  style={{
                    backgroundColor: color,
                    textShadow: '2px 2px 6px black',
                  }}
                >
                  {typeName}
                </p>
              );
            })}
          </div>
          <div className="font-serif  text-center pt-4 text-blue-900">
            {pokemonInfo.abilities.map((ability, index) => {
              const abilityName = ability.ability['name'];
              return (
                <div
                  index={index}
                  key={abilityName}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseOut}
                  className="first-letter:uppercase"
                >
                  {tooltipIsVisible === index && (
                    <p className="absolute left-2/3 w-full bg-slate-300 text-black p-1 px-2 border-slate-600 border-4 rounded-xl">
                      {abilitiesInfo[index]}
                    </p>
                  )}
                  {abilityName}
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <p className=" text-center text m-4">{pokemonInfo}</p>;
    }
  };
  return showPokemonInfo(pokemonInfo);
};

export default PokemonInfoCard;
