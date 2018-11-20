import {CURRENCY_API} from '../constants/api';

export const actionTypes = {
    CURRENCY_LOAD_REQUEST: 'CURRENCY_LOAD_REQUEST',
    CURRENCY_LOAD_SUCCESS: 'CURRENCY_LOAD_SUCCESS',
    CURRENCY_LOAD_FAILURE: 'CURRENCY_LOAD_FAILURE'
};

const requestOptions = ()  => ({
    method: 'GET'
});

const getCurrencies = () => fetch(`${CURRENCY_API}`, requestOptions());

export const loadCurrencies = dispatch => {

    return async dispatch => {

        dispatch({type: actionTypes.CURRENCY_LOAD_REQUEST});

        try {
            const response = await getCurrencies();
            const data = await response.json();

            dispatch({
                data,
                type: actionTypes.CURRENCY_LOAD_SUCCESS
            });

        } catch (error) {
            dispatch({
                error,
                type: actionTypes.CURRENCY_LOAD_FAILURE
            });
        }

    };

};
