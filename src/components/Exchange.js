//@flow
import React, {Component} from 'react';
import styled from 'styled-components';
import {Formik} from 'formik';
import {Form, Label, Input, Text} from '../theme/Form';
import {Loading} from './Loading';

const Wrap = styled.div`
    display: grid;
`;

const Items = styled.div`
    padding: 1rem 1rem 0;
`;

const Rate = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Country = styled.div`
    text-align: left;
`;

type TestProps = {
    rates: {},
    currencies: {string: string},
    ratesLoading: boolean
}

type TestState = {
    rates: {}
}

class Exchange extends Component<TestProps, TestState> {

    state = {
        rates: this.props.rates
    }

    updateRate = e => {

        const value = e.target.value;

        const rates = this.calculateRates(this.props.rates, rate => rate * parseInt(value));

        this.setState({
            rates
        });

    }

    calculateRates = (rates, fn) => {
        const newRates = {};

        Object.entries(rates).forEach(([key, val]) => newRates[key] = fn(val));
        return newRates;
    }

    exchangeInput = () => {
        return <Formik
            initialValues={{currency: ''}}
            validate={values => {
                let errors = {};

                if (!values.currency) {
                    errors.currency = 'Please enter an amount';
                }
                return errors;

            }}
            render={({
                errors,
                values,
                handleChange,
                handleBlur,
                handleSubmit
            }) => (
                <Form onChange={this.updateRate}>
                    <Label htmlFor="currency">Amount to convert</Label>
                    <Input
                        id="currency"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.currency}
                        border={errors.currency && '2px solid red'}
                        type="number"
                        name="currency"
                        placeholder="Enter amount in USD"
                    />
                    {errors.currency && <Text color="red">{errors.currency}</Text>}
                </Form>
            )}
        />;
    }

    renderRate = (item, i) => {
        const country = Object.values(this.props.currencies)[Object.keys(this.state.rates).indexOf(item)];

        return (<Rate key={i}>
            <Country>
                <Text>{item}</Text>
                <Text color='#0075eb'>{country}</Text>
            </Country>
            <Text fontSize={'1.6rem'}>{isNaN(this.state.rates[item]) ? 0 :
                Math.round(this.state.rates[item] * 100) / 100}</Text>
        </Rate>);
    }

    render() {

        return (
            <Wrap>
                {this.exchangeInput()}
                {this.props.ratesLoading || this.props.ratesLoading === undefined ?
                    <Loading /> : <Items>
                        {Object.keys(this.state.rates).map((item, i) => this.renderRate(item, i))}
                    </Items>}
            </Wrap>
        );
    }

};

export default Exchange;
