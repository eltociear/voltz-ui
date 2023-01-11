// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Global mock for local storage
const localStorageMock = (function () {
  let store: Record<string, string> = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

process.env.REACT_APP_SUBGRAPH_URL =
  'https://api.thegraph.com/subgraphs/name/voltzprotocol/voltz-goerli';
process.env.REACT_APP_DEFAULT_PROVIDER_NETWORK =
  'https://eth-goerli.alchemyapi.io/v2/PFrPYX2po6dCYwcDPFxC8seAIX3cLZqI';
process.env.REACT_APP_REQUIRED_ETHEREUM_NETWORK = 'goerli';
process.env.REACT_APP_NETWORK = 'goerli';