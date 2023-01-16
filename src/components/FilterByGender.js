const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilterGender(ev.target.value);
  };
  return (
    <select
      className="form__select"
      onChange={handleChange}
      value={props.filterByGender}
    >
      <option value="default" disabled>
        Género...
      </option>
      <option value="all">Todos</option>
      <option value="Female">Mujer</option>
      <option value="Male">Hombre</option>
    </select>
  );
};
export default FilterByGender;
