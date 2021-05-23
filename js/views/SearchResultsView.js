class SearchResultsView {
  _data;
  _parentElement = document.querySelector(".search_results");

  render(data) {
    if (!data) return;

    this._data = data;
    const markup = this._generateMarkup();
    this._clear();

    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner() {
    const spinner = `<div class="loader"></div>`;
    this._clear();

    this._parentElement.insertAdjacentHTML("afterbegin", spinner);
  }

  renderError() {
    const error = `<p> Country not found 🚩</p>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", error);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  _generateMarkup() {
    return `${this._data
      .map((el) => {
        return `
        <p class="card-title">${el.country} <img src="${el.countryInfo.flag}"></p>
        <div class="row">
            <div class="col-3 text-warning">
                <b>${el.cases}</b> <small>Confirmed</small> ✔
            </div>
            <div class="col-3 text-primary">
                <b>${el.recovered}</b> <small>Recovered</small> ❤
            </div>
            <div class="col-3 text-danger">
                <b>${el.deaths}</b> <small>Deaths</small> 🕊
            </div>
        </div>
      `;
      })
      .join("")}`;
  }
}

export default new SearchResultsView();
