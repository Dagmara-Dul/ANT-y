import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Projects from './Projects';




export default class Greeting extends Component {
    render(){
        return (
        <>
           
            <div className="background">
            <div className="greetPackage">
                <div className="greetAndWidgets"> 
                    <div className='greetCompDiv'>
                        <h3 className="greetComp">cześć, co dziś robimy?</h3>
                    </div>
                    <Projects />
                </div>
            </div>
            <div className="antImageGreet"></div>
            </div>
        </>
        )
    }
}