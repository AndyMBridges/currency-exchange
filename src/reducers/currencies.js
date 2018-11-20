import {actionTypes} from '../actions/currencies';

const currencies = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.CURRENCY_LOAD_REQUEST :
            return {
                ...state,
                loading: true
            };
        case actionTypes.CURRENCY_LOAD_SUCCESS :
            return {
                data: action.data,
                loading: false
            };
        case actionTypes.CURRENCY_LOAD_FAILURE :
            return {
                error: action.error
            };
        default:
            return state;
    }
};

export default currencies;
