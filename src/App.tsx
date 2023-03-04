import React, {useState} from 'react';
import './App.css'
import Todolist from "./Todolist";
import {v1} from "uuid";

export type FilterValueStyle = "all" | "completed" | "active"

function App() {

    let [tasks, setTasks] = useState([
        { id: v1(), title: "CSS", isDone: true },
        { id: v1(), title: "HTML", isDone: true },
        { id: v1(), title: "React", isDone: false },
        { id: v1(), title: "Redux", isDone: false },
        { id: v1(), title: "GraphQL", isDone: false },
    ])

    console.log(tasks)

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    function addTask(title: string) {
        let newTask = {
            id: v1(),
            title: title,
            isDone: false
        }
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    let [filter, setFilter] = useState<FilterValueStyle>("completed")

    let tasksForTodolist = tasks

    function changeFilter(value: FilterValueStyle) {
        setFilter(value)
    }


    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }

    return (
        <div className="App">
            <Todolist
                title="Tasks"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
            />
        </div>
    );
}

export default App;