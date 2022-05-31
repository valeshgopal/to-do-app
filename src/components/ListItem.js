import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ListItem = (props) => {
  const { item, handleEdit, handleDelete } = props;
  console.log(item);
  return (
    <>
      <div className='list-item'>
        <li>{item.taskName}</li>
        <div>
          <FaEdit
            className='icon icon-edit'
            onClick={() => handleEdit(item.id)}
          />
          <FaTrash
            className='icon icon-delete'
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </FaTrash>
        </div>
      </div>
    </>
  );
};

export default ListItem;
