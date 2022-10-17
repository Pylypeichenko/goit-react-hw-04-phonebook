export const Filter = ({ filter, onListFilter }) => {
  return (
    <>
      <label htmlFor="contactFilter">Find contact by name</label>
      <input
        id="contactFilter"
        name="filter"
        type="text"
        value={filter}
        onChange={onListFilter}
      />
    </>
  );
};
