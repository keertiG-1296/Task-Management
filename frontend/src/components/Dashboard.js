import { useEffect, useState } from 'react';
import api from '../api/axios';
import TaskForm from './TaskForm';

export default function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [message, setMessage] = useState('');

    const fetchTasks = async () => {
        try {
            const res = await api.get('tasks/');
            setTasks(res.data);
        } catch {
            setMessage('Failed to fetch tasks');
        }
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`tasks/${id}/`);
            fetchTasks();
        } catch {
            setMessage('Delete failed');
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>

            <TaskForm
                onSuccess={fetchTasks}
                editingTask={editingTask}
                clearEdit={() => setEditingTask(null)}
            />

            {message && <p>{message}</p>}

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <strong>{task.title}</strong>
                        <button onClick={() => setEditingTask(task)}>
                            Edit
                        </button>
                        <button onClick={() => handleDelete(task.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

