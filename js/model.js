import {
  API_COUNTRIES,
  API_HISTORY,
  API_GLOBAL_CASES,
  MAIN_COUNTRY,
} from "./config.js";

export const state = {
  globalCases: [],
  kenyanCases: [],
  search: {
    query: "",
    result: [],
  },
};

/**
 * Fetch global cases and push to state array
 * @returns array
 */
export const getGlobalCases = async function () {
  try {
    // Fetch covid cases from API
    const res = await fetch(`${API_GLOBAL_CASES}`);
    const data = await res.json();

    if (!res.ok) throw new Error(`${res.status}`);

    state.globalCases.push(data);

    return state.globalCases;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

/**
 * Fetch Kenyan cases and push to state array
 * @returns array
 */
export const getKenyanCases = async function () {
  try {
    // Fetch Kenyan Cases
    const res = await fetch(`${API_COUNTRIES}${MAIN_COUNTRY}`);
    const data = await res.json();

    if (!res.ok) throw new Error(`${res.status}`);

    state.kenyanCases.push(data);

    return state.kenyanCases;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const searchCountryCase = async function (query) {
  try {
    // Get search query
    state.search.query = query;

    // Fetch searched cases
    const res = await fetch(`${API_COUNTRIES}${query}`);
    const data = await res.json();

    if (!res.ok) throw new Error(`${res.status}`);

    state.search.result.push(data);

    console.log(res, data);
    return state.search.result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
