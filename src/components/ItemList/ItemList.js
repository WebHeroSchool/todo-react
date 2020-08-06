import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const ItemList = ( {tasks, onClickDone} ) => {
  return(<ul>
  {tasks.map( task => 
    <li className={styles.li} key={task.value}>
      <Checkbox 
        value="checkedA"
        checked={task.isDone}
        inputProps={{
          'aria-label': 'primary checkbox',
        }} 
        onChange 
        onClick={() => onClickDone(task.isDone) } />
      <Item value={task.value} isDone={task.isDone} onClickDone={onClickDone} />
      <Checkbox
        value="checkedF"
        indeterminate
        inputProps={{
          'aria-label': 'indeterminate checkbox',
        }}
      />
    </li>)}
  </ul>)
  };

export default ItemList;