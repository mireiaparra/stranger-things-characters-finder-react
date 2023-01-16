import "../styles/App.scss";

import getDataFromApi from "../services/api";
import { useEffect, useState } from "react";
import CharactersList from "./CharactersList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";

function App() {
  // VARIABLES ESTADO
  const [dataCharacters, setDataCharacters] = useState([]);
  const [filterByName, setFilterByName] = useState("");
  const [filterBySpecies, setFilterBySpecies] = useState("default");
  const [filterByPlanet, setFilterByPlanet] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  // // USEEFFECT
  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setDataCharacters(cleanData);
    });
  }, );

  //FUNCIONES HANDLER
  const handleFilterName = (value) => {
    setFilterByName(value);
  };
  const handleFilterSpecies = (value) => {
    setFilterBySpecies(value);
  };
  const handleReset = (ev) => {
    ev.preventDefault();
    setFilterBySpecies("default");
    setFilterByName("");
    setFilterByPlanet([]);
    setSortBy("default");
  };

  const handleSort = (value) => {
    setSortBy(value);
  };

  const handleFilterPlanet = (value) => {
    if (filterByPlanet.includes(value)) {
      const position = filterByPlanet.indexOf(value);
      filterByPlanet.splice(position, 1);
      setFilterByPlanet([...filterByPlanet]);
    } else {
      setFilterByPlanet([...filterByPlanet, value]);
    }
  };

  //FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML
  const charactersFiltered = dataCharacters
    .filter((character) =>
      character.name.toLowerCase().includes(filterByName.toLowerCase())
    )
    .filter((character) =>
      filterBySpecies === "default" || filterBySpecies === "all"
        ? true
        : character.species === filterBySpecies
    )
    .filter((character) => {
      if (filterByPlanet.length === 0) {
        return true;
      } else return filterByPlanet.includes(character.planet);
    });

  const charactersOrdered = () => {
    let result = "";
    if (sortBy === "episodes") {
      result = charactersFiltered.sort(function (a, b) {
        if (a.episodes < b.episodes) {
          return 1;
        }
        if (a.episodes > b.episodes) {
          return -1;
        }
        return 0;
      });
    } else {
      result = charactersFiltered.sort(function (a, b) {
        if (a[sortBy] > b[sortBy]) {
          return 1;
        }
        if (a[sortBy] < b[sortBy]) {
          return -1;
        }
        return 0;
      });
    }
    return result;
  };

  const findCharacter = (id) => {
    return dataCharacters.find((character) => character.id === (id));
  };                                                                    

  const getPlanets = () => {
    const characterPlanets = dataCharacters.map(
      (character) => character.planet
    );
    const uniquePlanets = characterPlanets.filter((planet, index) => {
      return characterPlanets.indexOf(planet) === index;
    });
    return uniquePlanets;
  };

  // HTML EN EL RETURN

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleFilterName={handleFilterName}
                  filterByName={filterByName}
                  handleFilterSpecies={handleFilterSpecies}
                  filterBySpecies={filterBySpecies}
                  handleReset={handleReset}
                  planets={getPlanets()}
                  handleFilterPlanet={handleFilterPlanet}
                  filterByPlanet={filterByPlanet}
                  handleSort={handleSort}
                  sortBy={sortBy}
                />
                <CharactersList
                  characters={charactersOrdered()}
                  filterByName={filterByName}
                />
              </>
            }
          ></Route> 

          <Route
            path="/character/:characterId"
            element={<CharacterDetail findCharacter={findCharacter} />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
