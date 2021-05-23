class SearchView {
  _parentElement = document.querySelector(".search_form");
  _searchField = this._parentElement.querySelector(".search_field");

  getQuery() {
    const query = this._searchField.value;
    this._clear();
    return query;
  }

  _clear() {
    this._searchField.value = "";
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", (e) => {
      e.preventDefault();

      handler();
    });
  }
}

export default new SearchView();
