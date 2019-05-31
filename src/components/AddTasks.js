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


export default class AddTasks extends Component{
    state={
        inputTaskName:'',
        inputTaskPoints: '',
        inputTaskTime:'',
        tasks:[]
    }

    componentDidMount (){
        this.loadTasks();
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log("cos")
        // const newArr = this.state.tasks.slice();
        // const newArr=[];
        const idProject = this.props.match.params.idProject;
        const obj = {
            taskName:this.state.inputTaskName,
            taskPoints: this.state.inputTaskPoints,
            taskTime: this.state.inputTaskTime,
            taskRealTime:[],
            idProject: idProject,
            
        }
        // newArr.push(obj);
        // this.setState({
        //     tasks:newArr
        // });
        
        fetch(`http://localhost:3000/tasks`,{
            headers: {
                // 'Accept': 'application/json', //to oznacza ze od serwera dostaje dane typu json
                'Content-Type': 'application/json' //to musi byc gdy wysyłam do json server
              },
           
            method: 'POST',
            body:JSON.stringify(obj) 
        }).then(()=>{this.loadTasks()});//bez wywołania bo to zostanie wywołane kiedy otrzymam odpowiedź z serwera
        // console.log(newArr);
        
    }
    // /**jestem tutaj! ładowanie danych */
    loadTasks = ()=>{
        const idProject = this.props.match.params.idProject;
        fetch(`http://localhost:3000/tasks?idProject=${idProject}`)//wszystkie taski dopasowane do projektu
        .then(response =>response.json())//odpowiedz zamieniam na dane typu json
        .then(resp =>{
            console.log(resp);
            this.insertTasks(resp)
        }) //tu mam odp serwera i mowie co ma z tym zrobic
    }

    insertTasks = (taski) =>{
        this.setState({tasks:taski})
    }

    handleInputNameChange = (e)=>{
        let valueFromForm = e.target.value;
        this.setState({
            inputTaskName: valueFromForm
        })
    }

    handleInputPointsChange =(e)=>{
        let valueFromForm = e.target.value;
        this.setState({
            inputTaskPoints: valueFromForm
        })
    }

    handleInputTimeChange = (e)=>{
        let valueFromForm = e.target.value;
        this.setState({
            inputTaskTime: valueFromForm
        })
    }

    handleStartTask = (e)=>{
        console.log("przekierowuję");
        let idTask = this.props.match.params.id;
        console.log(idTask);
    }

    render(){
       const idProject = this.props.match.params.idProject;
       console.log(idProject,'fff');
        return(
            <>
            <div className="formBackgroundTask">
                <form className="taskForm" onSubmit={this.handleSubmit}>
                    <div className='taskFormPackage'>
                        <input className="inputTaskForm" type="text" placeholder="zadanie" value={this.state.inputTaskName} onChange={this.handleInputNameChange}></input>
                        <input className="inputTaskForm" placeholder="pkt" value={this.state.inputTaskPoints} onChange={this.handleInputPointsChange}></input>
                        <input className="inputTaskForm" placeholder="cykle" value={this.state.inputTaskTime} onChange={this.handleInputTimeChange}></input>
                        <button type='submit'>+</button>
                    </div>
                </form>
                <div className="listOfTasks">
                <ul>
                {this.state.tasks.map((element)=>{
                    return(
                    <li key={element.id}> {element.taskName} pkt:{element.taskPoints} cykle: {element.taskTime} <button><i className="fas fa-edit"></i></button><button><i className="fas fa-trash"></i></button><button onClick={this.handleStartTask}><i className="fas fa-hourglass-start"></i></button></li>
                )})
                }
                </ul>
                </div>  
                <div className="buttonPackage">          
                <Link  style={{ textDecoration: 'none', color: 'white' }} to={`/addtasksinfo/${idProject}`}>
                <button className="buttonCustom"><i className="fas fa-chevron-left"></i> </button>
                </Link>
                <Link  style={{ textDecoration: 'none', color: 'white' }} to="/addtasksinfo">
                <button className="buttonCustom"> <i className="fas fa-chevron-right"></i> </button>
                </Link>
                </div>
                
            </div>
            </>
        )
    }
}

{/* <li key={element.id}> {element.taskName} pkt:{element.taskPoints} cykle: {element.taskTime} <button><i className="fas fa-edit"></i></button><button><i className="fas fa-trash"></i></button><button><i className="fas fa-hourglass-start"></i></button></li> */}