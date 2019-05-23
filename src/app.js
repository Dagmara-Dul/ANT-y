import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

import './scss/style.scss';
import UpInfo from './components/UpInfo'
import Greeting from './components/greeting';
import NotFound from './components/NotFound';
import AddProject from './components/AddProject';
import AddTasksInfo from './components/AddTasksInfo';
import AddTasks from './components/AddTasks';



class App extends Component {
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Greeting} />
                    <Route exact path='/addproject' component={AddProject} />
                    <Route exact path='/addtasksinfo' component={AddTasksInfo} />
                    <Route exact path='/addtasks' component={AddTasks} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)