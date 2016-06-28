import _products from './products.json'

const TIMEOUT = 2000;

export const getProducts = (callback, timeout) => {
  setTimeout(() => callback(_products), timeout || TIMEOUT)
}

export const butProducts = (callback, payload, timeout) => {
  setTimeout(() => callback(), timeout || TIMEOUT)
}
