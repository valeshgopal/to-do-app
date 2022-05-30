import React from 'react';
import ListItem from './ListItem';

const ListItems = (props) => {
  const { items, handleDelete } = props;

  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <ListItem item={item} handleDelete={handleDelete} key={item.id} />
          );
        })}
      </ul>
    </>
  );
};

export default ListItems;
