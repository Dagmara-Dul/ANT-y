import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

  export default class ChooseProject extends Component{
    state={
        projekty:[],
    }
     componentDidMount(){
         this.loadProjects();
     }

     loadProjects = ()=>{
        fetch('http://localhost:3000/projects')
        .then(response =>response.json())//odpowiedz zamieniam na dane typu json
        .then(resp =>{
            this.insertProjects(resp)
        }) //tu mam odp serwera i mowie co ma z tym zrobic
    }

    insertProjects = (proj) =>{
        this.setState({
            projekty: proj
        })
    }

    render(){
        const idProject = this.props.match.params.idProject;
          return(
              <div className="allProjectsBackground"> 
                  {this.state.projekty.map((element)=>{
                      return(
                          <div className="singleProjectAP" key={element.id}> <p>{element.projectEName}</p>
                          <Link to={`/addtasks/${idProject}`}><span>start</span></Link>
                          </div>
                      )
                  })}
                        <div className="btnAP">
                            <Link  style={{ textDecoration: 'none', color: 'white' }} to="/">
                            <button className="buttonCustom"><i className="fas fa-chevron-right"></i> </button>
                            </Link>
                        </div>
              </div>
          )
      }
  }