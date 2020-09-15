import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Card from "@material-ui/core/Card";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import Todo from "../Todo/Todo";
import About from "../About/About";

import styles from "./App.module.css";


const App = () => (<Router>
  <div className={styles.wrap}>
    <Card className={styles.sidebar}>
      <MenuList className={styles.sidebarList}>
        <Link className={styles.link} activeClassName={styles.linkActive} to='/'><MenuItem>О себе</MenuItem></Link>
        <Link className={styles.link} activeClassName={styles.linkTodo} to='/todo'><MenuItem>Дела</MenuItem></Link>
      </MenuList>
    </Card>

    <Card className={styles.content}>
      <Route path='/' exact component={About} />
      <Route path='/todo' component={Todo} />
    </Card>
  </div>
</Router>);

export default App;