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
        isDone: false,
        id: 1
      },
      {
        value: 'Пройти модуль Трудоустройство',
        isDone: false,
        id: 2
      },
      {
        value: 'Подготовится к собеседованию',
        isDone: true,
        id: 3
      }
    ]
  };

  onClickDone = (id) => {
    const newTaskList = this.state.tasks.map((task) => {
      const newTask = { ...task };

      if(task.id === id) {
        newTask.isDone = !task.isDone;
      }

      return newTask;
    });
    this.setState({ tasks: newTaskList });
  };

  render () {
    let uncompletedTasks = this.state.tasks.filter((task) => task.isDone === false);
    
      return (<div className={styles.wrap}>
        <h1 className={styles.title}>Важные дела:</h1>
        <InputItem />
        <ItemList tasks={this.state.tasks} onClickDone={this.onClickDone} />
        <Footer count={uncompletedTasks.length} />
      </div>)
  }
};

export default App;
