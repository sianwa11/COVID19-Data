// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"13Xkn":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "36f74cf6c7500bb250c84ad8fd60d6b7";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"350MX":[function(require,module,exports) {
var _modelJs = require("./model.js");
var _viewsGlobalDataViewJs = require("./views/GlobalDataView.js");
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _viewsGlobalDataViewJsDefault = _parcelHelpers.interopDefault(_viewsGlobalDataViewJs);
var _viewsKenyanDataViewJs = require("./views/KenyanDataView.js");
var _viewsKenyanDataViewJsDefault = _parcelHelpers.interopDefault(_viewsKenyanDataViewJs);
var _viewsSearchViewJs = require("./views/SearchView.js");
var _viewsSearchViewJsDefault = _parcelHelpers.interopDefault(_viewsSearchViewJs);
var _viewsSearchResultsViewJs = require("./views/SearchResultsView.js");
var _viewsSearchResultsViewJsDefault = _parcelHelpers.interopDefault(_viewsSearchResultsViewJs);
var _viewsChartViewJs = require("./views/ChartView.js");
var _viewsChartViewJsDefault = _parcelHelpers.interopDefault(_viewsChartViewJs);
const controlGlobalCases = async function () {
  try {
    // 1. Render Spinner
    _viewsGlobalDataViewJsDefault.default.renderSpinner();
    // 2. Get COVID-19 global cases
    await _modelJs.getGlobalCases();
    // 2. Render cases
    _viewsGlobalDataViewJsDefault.default.renderGlobalData(_modelJs.state.globalCases);
  } catch (err) {
    console.error(`${err}`);
  }
};
const controlKenyanCases = async function () {
  // 1. Render Spinner
  _viewsKenyanDataViewJsDefault.default.renderSpinner();
  // 2. Get Kenyan COVID-19 data
  await _modelJs.getKenyanCases();
  // 3. Render Kenyan cases
  _viewsKenyanDataViewJsDefault.default.render(_modelJs.state.kenyanCases);
};
const controlSearches = async function () {
  try {
    // 1. Get the inputed query
    const query = _viewsSearchViewJsDefault.default.getQuery();
    if (query === "") {
      alert("Input country");
      return;
    }
    // 2. Render the spinner
    _viewsSearchResultsViewJsDefault.default.renderSpinner();
    // 3. Run the search query
    await _modelJs.searchCountryCase(query);
    // 4. Render Results
    _viewsSearchResultsViewJsDefault.default.render(_modelJs.state.search.result);
  } catch (err) {
    _viewsSearchResultsViewJsDefault.default.renderError();
    console.log(`${err}`);
  }
};
const controlCOVIDHistory = async function () {
  try {
    // 1. Get the data
    const data = await _modelJs.getCOVIDHistory();
    // console.log(data);
    // 2. Calculate totals
    const confirmedCases = calculateTotals(data.cases);
    const confirmedDeaths = calculateTotals(data.deaths);
    const confirmedRecoveries = calculateTotals(data.recovered);
    // 3, Render the Chart
    _viewsChartViewJsDefault.default.render(confirmedCases, confirmedDeaths, confirmedRecoveries);
  } catch (err) {
    console.log(`${err}`);
  }
};
const calculateTotals = function (data) {
  let secondYearTotals = 0;
  let firstYearTotals = 0;
  const chartData = {
    twentytwenty: null,
    twentyone: null
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
  _viewsSearchViewJsDefault.default.addHandlerSearch(controlSearches);
  controlCOVIDHistory();
};
init();

},{"./model.js":"51beu","./views/GlobalDataView.js":"6TXnC","./views/KenyanDataView.js":"tpjoK","./views/SearchView.js":"5UmVX","./views/SearchResultsView.js":"4JiON","./views/ChartView.js":"1Pjf1","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"51beu":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "state", function () {
  return state;
});
_parcelHelpers.export(exports, "getGlobalCases", function () {
  return getGlobalCases;
});
_parcelHelpers.export(exports, "getKenyanCases", function () {
  return getKenyanCases;
});
_parcelHelpers.export(exports, "searchCountryCase", function () {
  return searchCountryCase;
});
_parcelHelpers.export(exports, "getCOVIDHistory", function () {
  return getCOVIDHistory;
});
var _configJs = require("./config.js");
const state = {
  globalCases: [],
  kenyanCases: [],
  search: {
    query: "",
    result: []
  },
  history: {
    cases: null,
    deaths: null,
    recovered: null
  }
};
const getGlobalCases = async function () {
  try {
    // Fetch covid cases from API
    const res = await fetch(`${_configJs.API_GLOBAL_CASES}`);
    const data = await res.json();
    if (!res.ok) throw new Error(`${res.status}`);
    state.globalCases.push(data);
    return state.globalCases;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const getKenyanCases = async function () {
  try {
    // Fetch Kenyan Cases
    const res = await fetch(`${_configJs.API_COUNTRIES}${_configJs.MAIN_COUNTRY}`);
    const data = await res.json();
    if (!res.ok) throw new Error(`${res.status}`);
    state.kenyanCases.push(data);
    return state.kenyanCases;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const searchCountryCase = async function (query) {
  try {
    // Get search query
    state.search.query = query;
    // Fetch searched cases
    const res = await fetch(`${_configJs.API_COUNTRIES}${query}`);
    const data = await res.json();
    if (!res.ok) throw new Error(`${res.status}`);
    state.search.result.push(data);
    // console.log(res, data);
    return state.search.result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const getCOVIDHistory = async function () {
  try {
    const res = await fetch(`${_configJs.API_HISTORY}`);
    const data = await res.json();
    if (!res.ok) throw new Error(`${res.status}`);
    state.history.cases = data.cases;
    state.history.deaths = data.deaths;
    state.history.recovered = data.recovered;
    return state.history;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

},{"./config.js":"4Qlxt","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"4Qlxt":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "API_COUNTRIES", function () {
  return API_COUNTRIES;
});
_parcelHelpers.export(exports, "API_GLOBAL_CASES", function () {
  return API_GLOBAL_CASES;
});
_parcelHelpers.export(exports, "API_HISTORY", function () {
  return API_HISTORY;
});
_parcelHelpers.export(exports, "MAIN_COUNTRY", function () {
  return MAIN_COUNTRY;
});
const API_COUNTRIES = "https://disease.sh/v3/covid-19/countries/";
const API_GLOBAL_CASES = "https://disease.sh/v3/covid-19/all";
const API_HISTORY = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";
const MAIN_COUNTRY = "Kenya";

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"6TXnC":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
class GlobalDataView {
  _data;
  _parentElement = document.querySelector(".global_data");
  renderGlobalData(data) {
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
        ${this._data.map(el => {
      return `
            <h5 class="card-title">Global Data 🌍</h5>

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
    }).join("")}
      `;
  }
}
exports.default = new GlobalDataView();

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"tpjoK":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
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
      ${this._data.map(el => {
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
    }).join("")}
      `;
  }
}
exports.default = new KenyanDataView();

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5UmVX":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
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
    this._parentElement.addEventListener("submit", e => {
      e.preventDefault();
      handler();
    });
  }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"4JiON":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
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
    return `${this._data.map(el => {
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
    }).join("")}`;
  }
}
exports.default = new SearchResultsView();

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"1Pjf1":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
class ChartView {
  _data = [];
  _ctx = [document.getElementById("casesChart").getContext("2d"), document.getElementById("deathChart").getContext("2d"), document.getElementById("recoveredChart").getContext("2d")];
  render(cases, deaths, recoveries) {
    if (!cases || !deaths || !recoveries) return;
    this._data[0] = cases;
    this._data[1] = deaths;
    this._data[2] = recoveries;
    this._generateMarkup();
    console.log(this._data);
  }
  _colorGen() {
    Math.floor(Math.random() * 256);
  }
  _generateMarkup() {
    for (let i = 0; i < this._data.length; i++) {
      let myChart = new Chart(this._ctx[i], {
        type: "doughnut",
        data: {
          labels: ["2020", "2021"],
          datasets: [{
            label: "Years",
            data: [this._data[i].twentytwenty, this._data[i].twentyone],
            backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1
          }]
        }
      });
    }
  }
}
exports.default = new ChartView();

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["13Xkn","350MX"], "350MX", "parcelRequire7808")

//# sourceMappingURL=index.fd60d6b7.js.map
