class LoaderView {
  _parentElement = document.querySelector(".loader");

  renderSpinner() {
    const spinner = `<div class="loader"></div>`;
    this._parentElement.innerHTML = "";
    return spinner;
  }
}

export default new LoaderView();
