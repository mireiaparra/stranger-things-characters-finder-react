const FilterByPlanet = (props) => {
  const handleInput = (ev) => {
    props.handleFilterPlanet(ev.target.value);
  };
  const renderPlanets = () => {
    return props.planets.map((planet, index) => {
      return (
        <li key={index}>
          <input
            className="form__input--checkbox"
            type="checkbox"
            onChange={handleInput}
            value={planet}
            checked={props.filterByPlanet.includes(planet)}
          />
          <label className="form__label--checkbox">{planet}</label>
        </li>
      );
    });
  };
  return <ul className="form__div--checkbox">{renderPlanets()}</ul>;
};
export default FilterByPlanet;
