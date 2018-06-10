let createHistory;
if (typeof window !== 'undefined') {
  createHistory = require('history/createBrowserHistory').default;
} else {
  createHistory = require('history/createMemoryHistory').default;
}

const history = createHistory();

export default history;