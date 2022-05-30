import React from 'react';

const ListItem = (props) => {
  const { item, handleDelete } = props;

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '20px' }}>
        <li>{item}</li>
        <button>Edit</button>
        <button onClick={() => handleDelete(item)}>Delete</button>
      </div>
    </>
  );
};

export default ListItem;
