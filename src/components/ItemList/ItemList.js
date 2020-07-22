import React from 'react';
import Item from '../Item/Item';

const ItemList = ( {todoItem} ) => (<ul>
  <li><Item todoItem={todoItem} /></li>
  <li><Item todoItem={'Пройти модуль Трудоустройство'} /></li>
  <li><Item todoItem={'Подготовится к собеседованию'} /></li>
</ul>);

export default ItemList;