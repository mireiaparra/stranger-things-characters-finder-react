const SortBy = (props) => {
  const handleChange = (ev) => {
    props.handleSort(ev.target.value);
  };
  return (
    <>
      <select
        className="form__select"
        onChange={handleChange}
        value={props.sortBy}
      >
        <option value="default" disabled>
          Ordenar por...
        </option>
        <option value="name">Nombre</option>
        <option value="id">Relevancia</option>
        <option value="episodes">Apariciones</option>
      </select>
    </>
  );
};
export default SortBy;
