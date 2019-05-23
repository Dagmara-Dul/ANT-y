import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
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
        const obj = {
            taskName:this.state.inputTaskName,
            taskPoints: this.state.inputTaskPoints,
            taskTime: this.state.inputTaskTime
        }
        // newArr.push(obj);
        // this.setState({
        //     tasks:newArr
        // });

        fetch('http://localhost:3000/tasks',{
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
        fetch('http://localhost:3000/tasks')
        .then(response =>response.json())//odpowiedz zamieniam na dane typu json
        .then(resp =>{
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

    render(){
        return(
            <>
            <form className="taskForm" onSubmit={this.handleSubmit}>
                <div className='taskFormPacage'>
                    <input className="inputTaskForm" type="text" placeholder="zadanie" value={this.state.inputTaskName} onChange={this.handleInputNameChange}></input>
                    <input className="inputTaskForm" placeholder="pkt" value={this.state.inputTaskPoints} onChange={this.handleInputPointsChange}></input>
                    <input className="inputTaskForm" placeholder="pomidory" value={this.state.inputTaskTime} onChange={this.handleInputTimeChange}></input>
                    <button type='submit'>+</button>
                </div>
            </form>
            <ul>
            {this.state.tasks.map((element)=>{
                return(
                <li key={element.id}> {element.taskName} pkt:{element.taskPoints} pomidorki: {element.taskTime} <button><i className="fas fa-edit"></i></button><button><i className="fas fa-trash"></i></button><button><i className="fas fa-hourglass-start"></i></button></li>
            )})
            }
            </ul>
                        
                        <Link  style={{ textDecoration: 'none', color: 'white' }} to="/addtasksinfo">
                        <button className="buttonCustom"><i className="fas fa-chevron-left"></i>wstecz </button>
                        </Link>
                        <Link  style={{ textDecoration: 'none', color: 'white' }} to="/addtasksinfo">
                        <button className="buttonCustom">dalej <i className="fas fa-chevron-right"></i> </button>
                        </Link>
            </>
        )
    }
}