import "../styles/SearchBar.css";

export const SearchBar = (props) => {
  const { searchUsers } = props;

  const debounceSearch = (callback, delay) => {
    let debounceTimer;

    return (...args) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  return (
    <>
      <h1>Admin UI</h1>
      <input
        className="search-bar"
        type="text"
        placeholder="Search by name, email or role"
        onInput={debounceSearch(searchUsers, 500)}
      />
    </>
  );
};
