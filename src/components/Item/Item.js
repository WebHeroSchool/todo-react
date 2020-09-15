import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import PropTypes from "prop-types";

class Item extends React.Component {

  render( {value, isDone} = this.props ) {

    Item.defaultProps = {
      value: "Пусто"
    };
    
    Item.propTypes = {
      value: PropTypes.string.isRequired
    };

    return (
      <span className={
        classnames({
          [styles.item]: true,
          [styles.done]: isDone
        })
      }>
        {value}
      </span>
    );
  }
}

export default Item;