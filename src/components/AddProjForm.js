import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Redirect,
    Switch,
    NavLink,
  } from 'react-router-dom';

export default class AddProjectForm extends Component{
    state={
        projectName:"",
        projectDesc:"",
        projectTime:"",
        projects: [],
        redirect:'',

    }

    // componentDidMount(){
         
    // }

    handleProjectSubmit =(event)=>{
                event.preventDefault();
                console.log("cos");
                
                const obj = {
                    projectEName:this.state.projectName,
                    projectEDesc: this.state.projectDesc,
                    projectETime: this.state.projectTime,
                   
                    projectRealTime:[],
                }
                fetch(`${window.location.protocol}//${window.location.hostname}:3000/projects` || `https://dashboard.heroku.com/apps/ant-y-serwer/projects`,{ //ZMIANA hosta - zczytywane będzie na bierząco z przeglądarki
                // fetch('http://localhost:3000/projects',{
                    headers: {
                    // 'Accept': 'application/json', //to oznacza ze od serwera dostaje dane typu json
                     'Content-Type': 'application/json' //to musi byc gdy wysyłam do json server
                 },
           
                    method: 'POST',
                    body:JSON.stringify(obj) 
                })
                .then(resp => resp.json())
                .then(resp => {
                    this.setState({
                    
                        redirect: `/addtasksinfo/${resp.id}`, //TO DO ODKOMENTOWANIA!
                    })
                });

            }
           
    // getIdProjectFetch = ()=>{
    //     fetch('http://localhost:3000/projects')
    //     .then(response => response.json())
    //     .then(resp =>{
    //         console.log(resp)
    //         const idProject = resp.id;
    //     })
    // }


    // insertProjects = (projecty) =>{
    //     this.setState({projects:projecty})
    // }

    handleProjectName = (e)=>{
        let valueFromInput = e.target.value;
        this.setState({projectName:valueFromInput});
    }


    handleProjectDesc = (e)=>{
        let valueFromInput = e.target.value;
        this.setState({projectDesc:valueFromInput});
    }

    handleProjectTime = (e)=>{
        let valueFromInput = e.target.value;
        this.setState({projectTime:valueFromInput});
    }

    render(){
        if(this.state.redirect){
            return <Redirect to={this.state.redirect}></Redirect>
        }
        return(
           <div className="addProjFormBackground">
            <form className="addProjForm" onSubmit={this.handleProjectSubmit}>
                <div className="addForm">
                    <div className="allElementProject">
                        <input type="text" placeholder="nazwa projektu" value={this.state.projectName} onChange={this.handleProjectName}></input>
                        <textarea placeholder="krótki opis" value={this.state.projectDesc} onChange={this.handleProjectDesc}></textarea>
                        <input placeholder="przybliżony czas realizacji" value={this.state.projectTime} onChange={this.handleProjectTime}></input>
                        <div className='addProjBtns'>
                            <Link  style={{ textDecoration: 'none', color: 'white' }} to="/">
                            <button className="buttonCustom"><i className="fas fa-chevron-left"></i> </button>
                            </Link>
                            {/* <Link  style={{ textDecoration: 'none', color: 'white' }} to="/addtasksinfo"> */}
                            <button className="buttonCustom" type='submit'> <i className="fas fa-chevron-right"></i> </button>
                            {/* </Link> */}
                        </div>
                    </div>

                    </div>
            </form>
            </div>
        )
    }
}