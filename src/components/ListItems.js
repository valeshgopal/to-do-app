import React from 'react';
import ListItem from './ListItem';

const ListItems = (props) => {
  const { items, handleDelete } = props;

  return (
    <>
      <ul>
        {items.map((item, index) => {
          return (
            <ListItem item={item} handleDelete={handleDelete} key={index} />
          );
        })}
      </ul>
    </>
  );
};

export default ListItems;
