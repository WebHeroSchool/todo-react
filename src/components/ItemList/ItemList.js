import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const ItemList = ( {tasks, onClickDone, onClickDelete} ) => {
  return(<ul>
  {tasks.map( task => 
    <li className={styles.li} key={task.value}>
      <Checkbox 
        checked={task.isDone} 
        onClick={() => onClickDone(task.id)} />
      <Item 
        value={task.value} 
        isDone={task.isDone} 
        />
      <Checkbox
        onClick={() => onClickDelete(task.id)}
        value="checkedRight"
        indeterminate
        inputProps={{
          'aria-label': 'indeterminate checkbox',
        }}
      />
    </li>)}
  </ul>)
  };

export default ItemList;