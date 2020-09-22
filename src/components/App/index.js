import React, { useState, useEffect} from 'react';
import  './styles.css';
import Dashboard from '../Dashboard';
import Login from '../Login';
import HomePage from '../HomePage';
import Register from '../Register';
import { createMuiTheme } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from '../firebase'

function App(){
    const [FirebaseInitialized, setFirebaseInitialized] = useState(false);
    useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	})
    return FirebaseInitialized != false ?
                ( 
                    <Router>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/dashboard" component={Dashboard} />
                        </Switch>
                    </Router>
                )
                :   <div id="loader"> <CircularProgress /></div> 
}

export default App;