import React from 'react';
import styles from './Footer.module.css';

const Footer = ( {count} ) => (<div>
  Количество дел, которые еще нужно выполнить: {count}
</div>);

Footer.defaultProps = {
  count: 0
};

export default Footer;