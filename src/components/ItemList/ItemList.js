import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from "prop-types";

const ItemList = ( {tasks, onClickDone, onClickDelete} ) => {
  return(<ul>
  {tasks.map( task => 
    <li className={styles.li} key={task.id}>
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

  ItemList.defaultProps = {
    tasks: [
      {
        value: "Задания не найдены",
        isDone: false
      }
    ]
  };

  ItemList.propTypes = {
    tasks: PropTypes.array.isRequired
  };

export default ItemList;