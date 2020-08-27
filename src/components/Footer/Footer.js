import React from 'react';
// import styles from './Footer.module.css';
import PropTypes from "prop-types";

const Footer = ( {count} ) => (<div>
  Количество дел, которые еще нужно выполнить: {count}
</div>);

Footer.defaultProps = {
  count: 0
};

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;