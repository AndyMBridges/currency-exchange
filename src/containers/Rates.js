//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRates, ratesLoading} from '../selectors/rates';
import {getCurrencies} from '../selectors/currencies';
import {loadRates} from '../actions/rates';
import {loadCurrencies} from '../actions/currencies';
import Exchange from '../components/Exchange';

type TestProps = {
    getRates: {string: number},
    getCurrencies: {string: string},
    ratesLoading: boolean,
    loadRates: () => void,
    loadCurrencies: () => void
}

class Rates extends Component<TestProps> {

    componentDidMount() {
        this.props.loadRates();
        this.props.loadCurrencies();
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.getRates !== this.props.getRates;
    }

    render() {

        const {getRates, getCurrencies, ratesLoading} = this.props;

        return <Exchange ratesLoading={ratesLoading} rates={getRates} currencies={getCurrencies} />;

    }

}

const mapStateToProps = state => {
    return {
        getRates: getRates(state),
        ratesLoading: ratesLoading(state),
        getCurrencies: getCurrencies(state)
    };
};

const mapDispatchToProps = dispatch => ({
    loadRates: () => setInterval(() => dispatch(loadRates(dispatch)), 10000),
    loadCurrencies: () => dispatch(loadCurrencies(dispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(Rates);
