const getState = state => state || {};

export const getCurrencies = state => getState(state).currencies.data || [];
