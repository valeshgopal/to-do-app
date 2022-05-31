import React from 'react';
import ListItem from './ListItem';

const ListItems = (props) => {
  const { items, handleEdit, handleDelete, handleDeleteAll } = props;

  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <ListItem
              item={item}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              key={item.id}
            />
          );
        })}
      </ul>
      <button class='btn btn-clear' onClick={handleDeleteAll}>
        Clear Tasks
      </button>
    </>
  );
};

export default ListItems;
