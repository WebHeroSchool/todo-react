import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    tasks: [
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
    ]
  };

  onClickDone = isDone => console.log(isDone);

  render () {
    let unCompletedTasks = this.state.tasks.filter(task => task.isDone === false);
    
      return (<div className={styles.wrap}>
        <h1 className={styles.title}>Важные дела:</h1>
        <InputItem />
        <ItemList tasks={this.state.tasks} onClickDone={this.onClickDone} />
        <Footer count={unCompletedTasks.length} />
      </div>)
  }
};

export default App;
