import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';



export default class AddNewProjectsWidget extends Component {
    render(){
        return (
            <>
                <div className="addNewPW">
                    <Link  style={{ textDecoration: 'none', color: 'white' }} to="/addproject"> 
                        <div className='allProjWidgDiv'>
                           <span> + </span>
                        </div>
                    </Link>
                    <span className="allProjWidgSpan">dodaj projekt</span>
                </div>
            </>
        )
    }
}