import {combineReducers} from 'redux';

import rates from './rates';
import currencies from './currencies';

const reducers = combineReducers({
    rates,
    currencies
});

export default reducers;
