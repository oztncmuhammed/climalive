function SearchBar({ query, setQuery }) {
  return (
    <div className="d-flex justify-content-center mt-4">
      <form className="search-bar d-flex" onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control me-2 rounded-pill"
          type="search"
          aria-label="Search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
