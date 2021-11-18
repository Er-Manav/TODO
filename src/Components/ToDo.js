import React, { Component } from 'react'
import './todo.css';

export default class ToDo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{task:"Read Emails",id:1},{task:"Read Articles",id:2},{task:"Listen Music",id:3}],
            currTask:''
        }
    }

handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({currTask: e.target.value});
}
handleSubmit = () => {
    if(this.state.currTask!=''){
    this.setState(
        {
            tasks :  [...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
            currTask: ''
        }
        )
    }
    else{
        alert('Enter Any Task')
    }
}
handleDelete = (id) => {
    let newarr = this.state.tasks.filter((taskObj)=>{
        return taskObj.id!=id
    })
    this.setState(
        {
            tasks : [...newarr]
        })
}

    render() {
        return (
            <div>
                <input type="text" placeholder='Enter Task' value={this.state.currTask} onChange={this.handleChange}/> 
                <button onClick={this.handleSubmit}>Submit</button>
                <ul>
                {
                    this.state.tasks.map((taskObj) =>(
                        <li key={taskObj.id}>
                            <p>{taskObj.task}</p>
                            <button id='deleteTask' onClick={()=>this.handleDelete(taskObj.id)}>Delete</button>
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}

