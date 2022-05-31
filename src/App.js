import React, { useState, useRef, useEffect } from 'react';
import ListItems from './components/ListItems';
import { v4 as uuid } from 'uuid';
import './App.css';

const getLocalStorage = () => {
  const localStorageItems = localStorage.getItem('items');
  return localStorageItems ? JSON.parse(localStorageItems) : [];
};

const App = () => {
  const [task, setTask] = useState('');
  const [items, setItems] = useState(getLocalStorage());

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const inputRef = useRef();

  const unique_id = uuid();
  const id = unique_id.slice(-12);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    else if (task && isEditing) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editId ? { ...item, taskName: task } : item
        )
      );
      setTask('');
      setEditId(null);
      setIsEditing(false);
    } else {
      setItems([...items, { id, taskName: task }]);
      setTask('');
      setIsEditing(false);
    }

    inputRef.current.value = '';
    inputRef.current.focus();
  };

  const handleEdit = (id) => {
    setIsEditing(true);
    inputRef.current.focus();
    const newTask = items.find((item) => item.id === id).taskName;
    setTask(newTask);
    setEditId(id);
    inputRef.current.value = newTask;
  };

  const handleDelete = (id) => {
    setItems(
      items.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const handleDeleteAll = () => {
    localStorage.clear();
    setItems([]);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <main className='container'>
      <h2 className='heading'>To Do App</h2>
      <form className='todo-form'>
        <input
          className='input-field'
          ref={inputRef}
          type='text'
          placeholder='Enter a new task'
          onChange={handleChange}
        />
        <button className='btn btn-main' onClick={handleSubmit}>
          {isEditing ? 'Update' : 'Add Task'}
        </button>
      </form>
      {items.length > 0 && (
        <ListItems
          items={items}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleDeleteAll={handleDeleteAll}
        />
      )}
    </main>
  );
};

export default App;
