import React from 'react';
import ListItem from './ListItem';

const ListItems = (props) => {
  const { items } = props;
  console.log(items);
  return (
    <>
      <ul>
        {items.map((item, index) => {
          return <ListItem item={item} key={index} />;
        })}
      </ul>
    </>
  );
};

export default ListItems;
