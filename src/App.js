import React, { useState, useRef, useEffect } from 'react';
import ListItems from './components/ListItems';
import { v4 as uuid } from 'uuid';
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [items, setItems] = useState([]);

  const inputRef = useRef();

  const unique_id = uuid();
  const id = unique_id.slice(-12);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task !== '') {
      setItems([...items, { id, taskName: task }]);
      setTask('');
    }

    inputRef.current.value = '';
    inputRef.current.focus();
  };

  const handleEdit = (id) => {
    // setEditItem(true);
    inputRef.current.focus();
    const newTask = items.find((item) => item.id === id).taskName;
    setTask(newTask);
    inputRef.current.value = newTask;
    const newItems = items.filter((item) => item.id !== id);
    setItems([...newItems]);
  };

  const handleDelete = (id) => {
    setItems(
      items.filter((item) => {
        return item.id !== id;
      })
    );
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <main className='container'>
      <form className='todo-form'>
        <input
          className='input-field'
          ref={inputRef}
          type='text'
          placeholder='Enter a new item'
          onChange={handleChange}
        />
        <button className='btn' onClick={handleSubmit}>
          Add Task
        </button>
      </form>

      <ListItems
        items={items}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </main>
  );
};

export default App;
