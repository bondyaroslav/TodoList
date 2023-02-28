import React, {useState} from 'react';
import './App.css'
import Todolist, {TaskType} from "./Todolist";

export type FilterValueStyle = "all" | "completed" | "active"

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "HTML", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false},
    ])
    let [filter, setFilter] = useState<FilterValueStyle>("completed")

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => {
            return t.id !== id;
        })
        setTasks(filteredTasks)
    }

    function changeFilter(value: FilterValueStyle) {
        setFilter(value)
    }

    let tasksForTodolist = tasks
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
            />
        </div>
    );
}

export default App;