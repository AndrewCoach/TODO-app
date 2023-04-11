import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import EditTaskPage from './components/EditTaskPage';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await axios.get(`${apiUrl}/api/task`);
        setTasks(response.data);
    };

    const handleAddTask = async (task) => {
        task.status = parseInt(task.status, 10);
        await axios.post(`${apiUrl}/api/task`, task);
        fetchTasks();
    };

    const handleEditTask = async (task) => {
        task.status = parseInt(task.status, 10);
        await axios.put(`${apiUrl}/api/task/${task.id}`, task);
        setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
        setEditingTask(null);
    };

    const handleDeleteTask = async (id) => {
        await axios.delete(`${apiUrl}/api/task/${id}`);
        setTasks(tasks.filter((t) => t.id !== id));
    };


    return (
        <div className="App">
            {editingTask ? (
                <EditTaskPage task={editingTask} onSubmit={handleEditTask} />
            ) : (
                <>
                    <h1>Task Manager</h1>
                    <TaskForm onSubmit={handleAddTask} />
                    <TaskList
                        tasks={tasks}
                        handleDelete={handleDeleteTask} // Updated prop name
                        handleEdit={setEditingTask} // Updated prop name
                    />
                </>
            )}
        </div>
    );
};

export default App;

