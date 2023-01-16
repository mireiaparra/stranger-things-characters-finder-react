import FilterByPlanet from "./FilterByPlanet";
import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import SortBy from "./SortBy";

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className="form__container">
      <form onSubmit={handleSubmit} className="form">
        <FilterByName
          handleFilterName={props.handleFilterName}
          filterByName={props.filterByName}
        />
        <FilterByGender
          handleFilterGender={props.handleFilterGender}
          filterByGender={props.filterByGender}
        />
        <FilterByPlanet
          planets={props.planets}
          handleFilterPlanet={props.handleFilterPlanet}
          filterByPlanet={props.filterByPlanet}
        />
        <SortBy handleSort={props.handleSort} sortBy={props.sortBy} />
      </form>
      <button className="form__reset" onClick={props.handleReset}>
        Reset
      </button>
    </section>
  );
};
export default Filters;
