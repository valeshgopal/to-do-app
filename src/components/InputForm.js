import React, { useState } from 'react';
import ListItems from './ListItems';

const InputForm = () => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, value]);
    setValue('');
  };

  console.log(value);
  console.log(items);
  return (
    <>
      <form>
        <input
          type='text'
          placeholder='Enter a new item'
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <ListItems items={items} />
    </>
  );
};

export default InputForm;
