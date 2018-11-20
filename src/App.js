import React, {Component} from 'react';
import {Switch, Router, Route} from 'react-router-dom';
import {history} from './helpers/history';

import Rates from './containers/Rates';
import Header from './components/Header';

import {GlobalStyle} from './theme/GlobalStyle';

class App extends Component {

    render() {

        return (
            <div className="wrapper">
                <GlobalStyle />
                <Router history={history}>
                    <div>
                        <Header />
                        <div className="main">
                            <Switch>
                                <Route path="/" component={Rates} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
