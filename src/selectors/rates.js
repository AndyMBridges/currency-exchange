const getState = state => state || {};

export const getRates = state => getState(state).rates.data || [];

export const ratesLoading = state => getState(state).rates.loading;
