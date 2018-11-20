import {actionTypes} from '../actions/rates';

const rates = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.RATES_LOAD_REQUEST :
            return {
                ...state,
                loading: true
            };
        case actionTypes.RATES_LOAD_SUCCESS :
            return {
                data: action.data.rates,
                loading: false
            };
        case actionTypes.RATES_LOAD_FAILURE :
            return {
                error: action.error
            };
        default:
            return state;
    }
};

export default rates;
