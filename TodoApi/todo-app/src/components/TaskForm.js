import React, { useState } from 'react';

const TaskForm = ({ onSubmit, initialValues }) => {
    const [name, setName] = useState(initialValues.name || '');
    const [description, setDescription] = useState(initialValues.description || '');
    const [priority, setPriority] = useState(initialValues.priority || 1);
    const [status, setStatus] = useState(initialValues.status || 0);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && priority >= 1 && priority <= 5) {
            onSubmit({ name, description, priority, status });
            setName('');
            setDescription('');
            setPriority(1);
            setStatus(0);
        }
    };

    const handleStatusChange = (event) => {
        setStatus(parseInt(event.target.value));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength="100"
                required
                placeholder="Task name"
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength="255"
                placeholder="Task description"
            />
            <input
                type="number"
                value={priority}
                onChange={(e) => setPriority(parseInt(e.target.value, 10))}
                min="1"
                max="5"
                required
            />
            <select value={status} onChange={handleStatusChange}>
                <option value="0">Initial</option>
                <option value="1">In Progress</option>
                <option value="2">Completed</option>
            </select>
            <button type="submit" disabled={status === 'Completed'}>
                Submit
            </button>
        </form>
    );
};

TaskForm.defaultProps = {
    initialValues: {},
};

export default TaskForm;
