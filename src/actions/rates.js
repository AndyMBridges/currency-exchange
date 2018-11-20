import {RATES_API} from '../constants/api';

export const actionTypes = {
    RATES_LOAD_REQUEST: 'RATES_LOAD_REQUEST',
    RATES_LOAD_SUCCESS: 'RATES_LOAD_SUCCESS',
    RATES_LOAD_FAILURE: 'RATES_LOAD_FAILURE'
};

const requestOptions = ()  => ({
    method: 'GET'
});

const getRates = () => fetch(`${RATES_API}`, requestOptions());

export const loadRates = dispatch => {

    return async dispatch => {

        dispatch({type: actionTypes.RATES_LOAD_REQUEST});

        try {
            const response = await getRates();
            const data = await response.json();

            dispatch({
                data,
                type: actionTypes.RATES_LOAD_SUCCESS
            });
        } catch (error) {
            dispatch({
                error,
                type: actionTypes.RATES_LOAD_FAILURE
            });
        }
    };
};
