const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilterName(ev.target.value);
  };
  return (
    <>
      <label htmlFor="name" className="form__label">
        Busca un personaje{" "}
      </label>
      <input
        className="form__input"
        type="text"
        name="name"
        id="name"
        placeholder="Ej: Steve"
        value={props.filterByName}
        onChange={handleChange}
      />
    </>
  );
};
export default FilterByName;
