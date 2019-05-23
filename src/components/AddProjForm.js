import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

export default class AddProjectForm extends Component{
    render(){
        return(
           <div className="addProjFormBackground">
            <form className="addProjForm">
                <div className="addForm">
                    <div className="allElementProject">
                        <input type="text" placeholder="nazwa projektu"></input>
                        <textarea placeholder="krótki opis"></textarea>
                        <input placeholder="przybliżony czas realizacji"></input>
                        <div className='addProjBtns'>
                            <Link  style={{ textDecoration: 'none', color: 'white' }} to="/">
                            <button className="buttonCustom"><i className="fas fa-chevron-left"></i> </button>
                            </Link>
                            <Link  style={{ textDecoration: 'none', color: 'white' }} to="/addtasksinfo">
                            <button className="buttonCustom"> <i className="fas fa-chevron-right"></i> </button>
                            </Link>
                        </div>
                    </div>

                    </div>
            </form>
            </div>
        )
    }
}