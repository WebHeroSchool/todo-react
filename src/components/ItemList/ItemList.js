import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const ItemList = ( {tasks} ) => {
  return(<ul>
  {tasks.map( task => 
    <li className={styles.li} key={task.value}>
      <Checkbox 
      value="checkedLeft"
      inputProps={{
        'aria-label': 'primary checkbox',
      }} 
      onChange />
      <Item value={task.value} isDone={task.isDone} />
      <Checkbox
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