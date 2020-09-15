import React, { useState, useEffect } from "react";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import styles from "./Todo.module.css";



const Todo = () => {
  const initialState = {
    tasks: [
      {
        value: "Дело 1",
        isDone: false,
        id: 1
      }
    ],
    count: 1,
    filter: "allTask",
    error: false,
    helperText: ""
  };

  const [tasks, setTasks] = useState(initialState.tasks);
  const [count, setCount] = useState(initialState.count);
  const [error, setError] = useState(initialState.error);
  const [filter, setFilter] = useState(initialState.filter);
  const [helperText, setHelperText] = useState(initialState.helperText);

  // eslint-disable-next-line no-console
  useEffect(() => {console.log("componentDidMount");}, []);
  // eslint-disable-next-line no-console
  useEffect(() => {console.log("componentDidUpdate");});

  const onClickDone = (id) => {
    const newTaskList = tasks.map((task) => {
      const newTask = { ...task };

      if (task.id === id) {
        newTask.isDone = !task.isDone;
      }

      return newTask;
    });
    setTasks(newTaskList);
  };

  const onClickDelete = (id) => {
    const newTaskList = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTaskList);
    setCount((count) => count - 1);
  };

  const onClickAdd = (value) => {
    if (value !== "") {
      const newTasks = [
        ...tasks,
        {
          value,
          isDone: false,
          id: count + 1
        }
      ];
      setTasks(newTasks);
      setCount((count) => count + 1);
      setError((error) => error = false);
      setHelperText((helperText) => helperText = "");
    } else {
      setError((error) => error = true);
      setHelperText((helperText) => helperText = "Пустое поле");
    }
  };

  const executedTaskLength = () => {
        let res = tasks.filter((task) => {
          return(task.isDone)
        });
        return (res.length);
      };

  const unfulfilledTaskLength = () => {
    let res = tasks.filter((task) => {
      return (!task.isDone)
    });
    return (res.length);
  };

  let unfulfilledTask = unfulfilledTaskLength(tasks);
  let executedTask = executedTaskLength(tasks);

  

  return (<div className={styles.wrap}>
    <h1 className={styles.title}>Список дел:</h1>
    <InputItem
      onClickAdd={onClickAdd}
      error={error}
      helperText={helperText}
    />
    <ItemList
      tasks={tasks}
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
    />
    <Footer 
      count={count}
      unfulfilledTask={unfulfilledTask}
      executedTask={executedTask} />
  </div>);
};

export default Todo;