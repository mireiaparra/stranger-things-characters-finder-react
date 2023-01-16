const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilterSpecies(ev.target.value);
  };
  return (
    <select
      className="form__select"
      onChange={handleChange}
      value={props.filterBySpecies}
    >
      <option value="default" disabled>
        Especie...
      </option>
      <option value="all">Todos</option>
      <option value="Alien">Alien</option>
      <option value="Human">Humano</option>
    </select>
  );
};
export default FilterBySpecies;
