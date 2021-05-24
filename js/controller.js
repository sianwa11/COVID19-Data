import * as model from "./model.js";

import GlobalDataView from "./views/GlobalDataView.js";
import KenyanDataView from "./views/KenyanDataView.js";
import SearchView from "./views/SearchView.js";
import SearchResultsView from "./views/SearchResultsView.js";
import ChartView from "./views/ChartView.js";

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

const controlCOVIDHistory = async function () {
  try {
    // 1. Get the data
    const data = await model.getCOVIDHistory();
    // console.log(data);

    // 2. Calculate totals
    const confirmedCases = calculateTotals(data.cases);
    const confirmedDeaths = calculateTotals(data.deaths);
    const confirmedRecoveries = calculateTotals(data.recovered);

    // 3, Render the Chart
    ChartView.render(confirmedCases, confirmedDeaths, confirmedRecoveries);
  } catch (err) {
    console.log(`${err}`);
  }
};

const calculateTotals = function (data) {
  let secondYearTotals = 0;
  let firstYearTotals = 0;
  const chartData = {
    twentytwenty: null,
    twentyone: null,
  };

  for (const [key, value] of Object.entries(data)) {
    if (key.endsWith("21")) {
      secondYearTotals += value;
    }

    if (key.endsWith("20")) {
      firstYearTotals += value;
    }
  }

  chartData.twentytwenty = secondYearTotals;
  chartData.twentyone = firstYearTotals;

  // console.log(chartData);
  return chartData;
};

// Starting point of the application
const init = function () {
  controlGlobalCases();
  controlKenyanCases();
  SearchView.addHandlerSearch(controlSearches);
  controlCOVIDHistory();
};

init();

//todo: Add Inheritance to views and add chart js with worldwide data also fix the search issue
//todo: Find a better way to display chart and include death and revcovered
