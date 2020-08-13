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
    ],
    count: 3,
    error: false
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

  onClickDelete = (id) => {
    const newTaskList = this.state.tasks.filter((task) => {
      return task.id !== id;
    });
    this.setState({ tasks: newTaskList });
  };

  onClickAdd = (value) => {
    if(value !== '') {
      this.setState((state) => ({
        tasks: [
          ...state.tasks,
          {
            value,
            isDone: false,
            id: state.count + 1
          }
        ],
        count: state.count + 1,
        error: false
      }))} else {
        this.setState((state) => ({error: true}));
      }
    };

  render () {
      return (<div className={styles.wrap}>
        <h1 className={styles.title}>Важные дела:</h1>
        <InputItem 
        onClickAdd={this.onClickAdd}
        error={this.state.error} 
        />
        <ItemList 
          tasks={this.state.tasks} 
          onClickDone={this.onClickDone} 
          onClickDelete={this.onClickDelete} 
          />
        <Footer count={this.state.count} />
      </div>)
  }
};

export default App;
