import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  render () {
    const tasks = [
      {
        value: 'Закончить модуль по React',
        isDone: false
      },
      {
        value: 'Пройти модуль Трудоустройство',
        isDone: false
      },
      {
        value: 'Подготовится к собеседованию',
        isDone: true
      }
    ];
    
    let unCompletedTasks = tasks.filter(task => task.isDone === false);
    
      return (<div className={styles.wrap}>
        <h1 className={styles.title}>Важные дела:</h1>
        <InputItem />
        <ItemList tasks={tasks} />
        <Footer count={unCompletedTasks.length} />
      </div>)
  }
};

export default App;
