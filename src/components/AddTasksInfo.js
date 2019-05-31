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
        const idProject = this.props.match.params.idProject;
        return(
           
            
                <div className="addTasksInfo">
                    <div className="addTaskInfoPackage">
                        <div className="remainderTaskInfo">
                            <h3>pamiętaj:</h3>
                            <ol className="addTIinstructions">
                                <li>Rozbij projekt na małe zadania</li>
                                <li>W zalezności od trudności nadaj każdemu zadaniu punkty</li>
                                <li>Wpisz zakładany czas realizacji</li>

                            </ol>
                        </div>
                    <div className="instructionTaskInfo">
                        <h3>jak działać</h3>
                        {/* <ul className="addTIinstructions"> */}
                            <span>zacznij od zadania, które sprawi Ci najwięcej frajdy</span>
                            <span>ustaw poprzeczkę niżej niż jesteś w stanie zrobić</span>
                            <span> upewnij się, że nic nie będzie Ci przeszkadzać - bądź poza zasięgiem telefonu i social media</span>

                        {/* </ul> */}
                        </div>
                    </div>
                    
                    <div className="addTasksInfoBtn">
                    <Link  style={{ textDecoration: 'none', color: 'white' }} to="/addproject">
                        <button className="prev"><i className="fas fa-chevron-left"></i>  </button>
                    </Link>
                    <Link  style={{ textDecoration: 'none', color: 'white' }} to={`/addtasks/${idProject}`}>
                        <button className="next"> <i className="fas fa-chevron-right"></i> </button>
                    </Link>
                    </div>
                    
                </div>
            
        )
    }
}