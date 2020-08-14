import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import classnames from "classnames";
import PropTypes from "prop-types";

class InputItem extends React.Component {
  state = {
    inputValue: ""
  };

  onButtonClick = () => {
    this.setState({
      inputValue: ""
    });
    this.props.onClickAdd(this.state.inputValue);
  }

  render() {
    const {onClickAdd} = this.props;

    InputItem.propTypes = {
      error: PropTypes.bool.isRequired,
      helperText: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
      ])
    };
    
    return (<div>
      <div className={styles.textDiv}>
        <TextField
          className={styles.textField}
          id="standard-search"
          label="Добавить задание"
          type="search"
          fullWidth
          helperText={this.props.helperText}
          error={this.props.error}
          value={this.state.inputValue}
          onChange={(event) => {
            this.setState({ inputValue: event.target.value.toUpperCase() });
          }}
        />
      </div>
      <Button
        variant='contained'
        color='primary'
        className={styles.btn}
        fullWidth
        onClick={this.onButtonClick} >
        Добавить
      </Button>
    </div>);
  }
}

export default InputItem;