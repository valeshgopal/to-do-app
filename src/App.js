import React, { useState, useRef, useEffect } from 'react';
import ListItems from './components/ListItems';
import { v4 as uuid } from 'uuid';

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

  const handleDelete = (id) => {
    setItems(
      items.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <>
      <form>
        <input
          ref={inputRef}
          type='text'
          placeholder='Enter a new item'
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add Task</button>
      </form>

      <ListItems items={items} handleDelete={handleDelete} />
    </>
  );
};

export default App;
