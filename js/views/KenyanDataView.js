class KenyanDataView {
  _data;
  _parentElement = document.querySelector(".kenyan_data");

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

  _clear() {
    // Clear the html
    this._parentElement.innerHTML = "";
  }

  _generateMarkup() {
    return `
      ${this._data
        .map((el) => {
          return `
        <h5 class="card-title">Kenya <img src="${el.countryInfo.flag}" /></h5>

        <h4 class="card-text text-warning">
            <b>${el.cases}</b> <small>Confirmed cases</small> ✔
        </h4>

        <h4 class="card-text text-primary">
            <b>${el.recovered}</b> <small>Recovered</small> ❤
        </h4>

        <h4 class="card-text text-danger">
            <b>${el.deaths}</b> <small>Deaths</small> 🕊
        </h4>
        `;
        })
        .join("")}
      `;
  }
}

export default new KenyanDataView();
