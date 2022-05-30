import React from 'react';

const ListItem = (props) => {
  const { item, handleDelete } = props;
  console.log(item);
  return (
    <>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '20px' }}>
        <li>{item.taskName}</li>
        <button>Edit</button>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </div>
    </>
  );
};

export default ListItem;
