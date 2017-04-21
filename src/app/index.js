import React from 'react';
import ReactDOM from 'react-dom';
import {Root} from './Components/Root';
import {Home} from './Components/Home';
import {User} from './Components/User'
import {Router, Route, browserHistory} from 'react-router';

class App extends React.Component
{
    render(){
        return(
        <Router  history={browserHistory}>
            <Route path={"user"} component={User}/>
            <Route path={"home"} component={Home}/>
        </Router>
        );
    }
}
ReactDOM.render(<App />,document.getElementById('app'));