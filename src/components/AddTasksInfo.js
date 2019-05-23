import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

  export default class AddTasksInfo extends Component{
    render(){
        return(
           
            
                <div className="addTasksInfo">
                    <div>
                        <h3>pamiętaj:</h3>
                        <ol className="addTIinstructions">
                            <li>Rozbij projekt na małe zadania</li>
                            <li>W zalezności od trudności nadaj każdemu zadaniu punkty</li>
                            <li>Wpisz zakładany czas realizacji</li>

                        </ol>

                        <h3>jak działać</h3>
                        <ul className="addTIinstructions">
                            <li>zacznij od zadania, które sprawi Ci najwięcej frajdy</li>
                            <li>ustaw poprzeczkę niżej niż jesteś w stanie zrobić</li>
                            <li> upewnij się, że nic nie będzie Ci przeszkadzać - bądź poza zasięgiem telefonu i social media</li>

                        </ul>
                    </div>
                    
                    <div className="addTasksInfoBtn">
                    <Link  style={{ textDecoration: 'none', color: 'white' }} to="/addproject">
                        <button className="prev"><i className="fas fa-chevron-left"></i>wstecz  </button>
                    </Link>
                    <Link  style={{ textDecoration: 'none', color: 'white' }} to="/addtasks">
                        <button className="next">dalej <i className="fas fa-chevron-right"></i> </button>
                    </Link>
                    </div>
                    
                </div>
            
        )
    }
}