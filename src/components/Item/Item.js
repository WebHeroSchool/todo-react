import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Item = ( {value, isDone} ) => (<span className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone
  })
}>
  {value}
</span>)

Item.defaultProps = {
  value: "Пусто"
};

Item.propTypes = {
  value: PropTypes.string.isRequired
};

export default Item;