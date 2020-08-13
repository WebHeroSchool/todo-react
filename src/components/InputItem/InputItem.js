import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';

class InputItem extends React.Component {
  state = {
    inputValue: ''
  };

  onButtonClick = () => {
    this.setState({
      inputValue: ''
    });
    this.props.onClickAdd(this.state.inputValue);
  }



  render() {
    const {onClickAdd} = this.props;
    
    return (<div>
      <TextField
        id="standard-search" 
        label="Добавить задание" 
        type="search"
        error={this.props.error}
        value={this.state.inputValue}
        onChange={(event) => { 
          this.setState({ inputValue: event.target.value.toUpperCase() }) 
        }} 
        />
      <Button
        variant='contained'
        color='primary'
        className={styles.btn}
        fullWidth
        onClick={this.onButtonClick} >
        Добавить
      </Button>
    </div>)
  }
}

export default InputItem;