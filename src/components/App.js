import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../styles/main.css';

import Login from './Login';
import Classroom from './Classroom';
import ExtraResources from './ExtraResources';
import Provo from './Provo';
import redirects from './redirects';

class App extends Component {

    constructor() {
        super()
        this.state = {
            route: ''   
        }
        this.setRoute = this.setRoute.bind(this);
    }

    setRoute(route) {
        this.setState({route})
    }

    render() {
        const { route } = this.state;

        const col = '70px';
        const gridStyles = {
            login:              { gridTemplateColumns: `1fr ${col} ${col} ${col}` }
            ,classroom:         { gridTemplateColumns: `${col} 1fr ${col} ${col}` }
            ,extra_resources:   { gridTemplateColumns: `${col} ${col} 1fr ${col}` }
            ,provo:             { gridTemplateColumns: `${col} ${col} ${col} 1fr` }
        }
        const displayNone = {
            display: 'none'
        }

        return (
            <div className="App" style={ gridStyles[route] }>
                
                <section className="space App_login" >
                    <div className="linkBar" style={ Object.assign({}, route === 'login' && displayNone) }>
                        <Link to="/login"><h1>{ route !== 'login' && 'Log Out'}</h1></Link>
                    </div>
                    <Switch>
                        <Route path="/login" render={ props => <Login {...props} setRoute={this.setRoute}/> } />
                        { redirects }
                    </Switch>
                </section>

                <section className="space App_classroom" >
                    <Link to="/classroom">
                        <div className="linkBar" style={ Object.assign({}, route === 'classroom' && displayNone) }>
                            <h1>{ route !== 'classroom' && 'Classroom'}</h1>
                        </div>
                    </Link>
                    <Switch> 
                        <Route path="/classroom" render={ props => <Classroom {...props} setRoute={this.setRoute}/> } /> 
                        { redirects }
                    </Switch>
                </section>

                <section className="space App_extra_resources" >
                    <Link to="/extra_resources">
                        <div className="linkBar" style={ Object.assign({}, route === 'extra_resources' && displayNone) }>
                            <h1>{ route !== 'extra_resources' && 'Extra Resources'}</h1>
                        </div>
                    </Link>
                    <Switch> 
                        <Route path="/extra_resources" render={ props => <ExtraResources {...props} setRoute={this.setRoute} /> } /> 
                        { redirects }
                    </Switch>
                </section>

                <section className="space App_provo">
                    <Link to="/provo">
                        <div className="linkBar" style={ Object.assign({}, route === 'provo' && displayNone) }>
                            <h1>{ route !== 'provo' && 'Provo'}</h1>
                        </div>
                    </Link>
                    <Switch>
                        <Route path="/provo" render={ (props) => <Provo {...props} setRoute={this.setRoute}/> } />
                        { redirects }
                    </Switch>
                </section> 

                
                    
            </div>
        )
    }
}

export default App;