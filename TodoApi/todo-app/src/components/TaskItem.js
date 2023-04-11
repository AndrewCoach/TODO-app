import React from 'react';

const TaskItem = ({ task, handleEdit, handleDelete }) => {
    console.log('Task status:', task.status); // Log the task status
    return (
        <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '8px' }}>{task.name}</td>
            <td style={{ padding: '8px' }}>{task.description}</td>
            <td style={{ padding: '8px' }}>{task.priority}</td>
            <td style={{ padding: '8px' }}>{task.status}</td>
            <td style={{ padding: '8px' }}>
                <button onClick={() => handleEdit(task)} disabled={task.status == "Completed"}>Edit</button>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
            </td>
        </tr>
    );
};

export default TaskItem;


