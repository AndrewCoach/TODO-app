import React, { useState } from 'react';
import TaskForm from './TaskForm';

const EditTaskPage = ({ task, onSubmit }) => {
    const [editedTask, setEditedTask] = useState(task);

    const handleSubmit = (updatedTask) => {
        onSubmit({ ...editedTask, ...updatedTask });
    };

    return (
        <div>
            <h1>Edit Task</h1>
            <TaskForm onSubmit={handleSubmit} initialValues={editedTask} />
        </div>
    );
};

export default EditTaskPage;

