import * as model from "./model.js";

import GlobalDataView from "./views/GlobalDataView.js";
import KenyanDataView from "./views/KenyanDataView.js";
import SearchView from "./views/SearchView.js";
import SearchResultsView from "./views/SearchResultsView.js";

const controlGlobalCases = async function () {
  try {
    // 1. Render Spinner
    GlobalDataView.renderSpinner();

    // 2. Get COVID-19 global cases
    await model.getGlobalCases();

    // 2. Render cases
    GlobalDataView.renderGlobalData(model.state.globalCases);
  } catch (err) {
    console.error(`${err}`);
  }
};

const controlKenyanCases = async function () {
  // 1. Render Spinner
  KenyanDataView.renderSpinner();

  // 2. Get Kenyan COVID-19 data
  await model.getKenyanCases();

  // 3. Render Kenyan cases
  KenyanDataView.render(model.state.kenyanCases);
};

const controlSearches = async function () {
  try {
    // 1. Get the inputed query
    const query = SearchView.getQuery();

    if (query === "") {
      alert("Input country");
      return;
    }

    // 2. Render the spinner
    SearchResultsView.renderSpinner();

    // 3. Run the search query
    await model.searchCountryCase(query);

    // 4. Render Results
    SearchResultsView.render(model.state.search.result);
  } catch (err) {
    SearchResultsView.renderError();
    console.log(`${err}`);
  }
};

// Starting point of the application
const init = function () {
  controlGlobalCases();
  controlKenyanCases();
  SearchView.addHandlerSearch(controlSearches);
};

init();

//todo: Add Inheritance to views and add chart js with worldwide data also fix the search issue
