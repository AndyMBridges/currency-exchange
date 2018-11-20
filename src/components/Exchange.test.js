import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Exchange from './Exchange';

configure({adapter: new Adapter()});

const object = {
    'USD': 12
};

const ExchangeComponent = shallow(<Exchange rates={object} currencies={object} />);

test('Double the rate', () => {

    expect(ExchangeComponent.instance().calculateRates(object, rate => rate * 2)).toEqual({'USD': 24});

});

test('Check rate state has updated', () => {

    ExchangeComponent.setState({rates: object});

    expect(ExchangeComponent.state().rates).toEqual(object);

});
