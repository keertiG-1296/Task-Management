import { useEffect, useState } from 'react';
import api from '../api/axios';

export default function TaskForm({ onSuccess, editingTask, clearEdit }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description || '');
        }
    }, [editingTask]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingTask) {
                await api.put(`tasks/${editingTask.id}/`, {
                    title,
                    description,
                });
                setMessage('Task updated successfully');
                clearEdit();
            } else {
                await api.post('tasks/', { title, description });
                setMessage('Task created successfully');
            }

            setTitle('');
            setDescription('');
            onSuccess();
        } catch (err) {
            setMessage('Operation failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <button type="submit">
                {editingTask ? 'Update Task' : 'Add Task'}
            </button>

            {message && <p>{message}</p>}
        </form>
    );
}
