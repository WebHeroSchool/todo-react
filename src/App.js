import React from 'react';
import logo from './logo.svg';
import './App.css';

const number = 33;
const flag = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'blue'
        }}>Добавим стили</p>
        <p>
          Выведем значение переменной number: {number}
        </p>
        <p>
          Вывод числа: {54}
        </p>
        <p>
          Вывод результата арифметической операции number + 67: {number + 67}
        </p>
        <p>
          Вывод результата логической операции с переменной flag: {flag && 'flag is true'}
        </p>
        <p>
          Использования тернарного условия с переменной flag: {flag ? 'flag is true': 'flag is false'}
        </p>
        <p>
          {null}
          {undefined}
          {false}
          {true}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
