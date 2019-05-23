import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AllProjectsWidget from './AllProjectsWidget';
import AddNewProjectsWidget from './AddNewPWidget';



export default class Projects extends Component {
    render(){
        return (
        <>
            <div className='projectsComponent'>
                <AllProjectsWidget />
                <AddNewProjectsWidget />
            </div>
        </>
        )
    }
}