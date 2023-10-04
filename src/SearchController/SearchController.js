import React from 'react';
import PokemonInfoCard from '../PokemonInfoCard/PokemonInfoCard';
import SearchBar from '../SearchBar/SearchBar';
import { useState } from 'react';

const SearchController = () => {
  const [pokemonInfo, setPokemonInfo] = useState('');
  const [abilitiesInfo, setabilitiesInfo] = useState('');
  let timeout = null;

  const handleSearch = ({ target: { value } }) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      getPokemonData(value);
    }, 300);
  };

  const getPokemonData = async (name) => {
    try {
      if (name !== '') {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const pokemonData = await response.json();
        const abilitiesData = await getAbilityData(pokemonData);
        setPokemonInfo(pokemonData);
        setabilitiesInfo(abilitiesData);
      } else {
        setPokemonInfo('Nie znaleziono takiego pokemona!');
      }
    } catch (e) {}
  };

  const getAbilityData = async (pokemonData) => {
    const abilities = [...pokemonData.abilities];
    const abilityData = abilities.map(async (ability) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/ability/${ability.ability.name}`
      );
      const data = await response.json();
      return data.effect_entries[1].short_effect;
    });

    return Promise.all(abilityData).then((x) => x);
  };

  return (
    <div className="bg-slate-400 rounded-2xl relative flex top-36 items-center flex-col min-h-[30rem] h-max w-max">
      <SearchBar onSearch={handleSearch} />
      <PokemonInfoCard
        pokemonInfo={pokemonInfo}
        abilitiesInfo={abilitiesInfo}
      />
    </div>
  );
};

export default SearchController;
