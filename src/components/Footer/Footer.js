import React from 'react';
import styles from './Footer.module.css';
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";


class Footer extends React.Component {

  render({count, unfulfilledTask, executedTask} = this.props) {

    Footer.defaultProps = {
      count: 0
    };
    
    Footer.propTypes = {
      count: PropTypes.number.isRequired
    };

    return (
      <ul className={styles.list}>
        <li className={styles.element}><Button onClick={() => {}} size="small" variant="text" color="primary">
          Всего: <div className={styles.count}>{count}</div>
        </Button></li>
        <li className={styles.element}><Button onClick={() => {}} size="small" variant="text" color="primary">
          Выполненные: <div className={styles.count}>{executedTask}</div>
        </Button></li>
        <li className={styles.element}><Button size="small" variant="text" color="primary">
    Невыполненные: <div className={styles.count}>{unfulfilledTask}</div>
        </Button></li>
      </ul>
    );
  }
}

export default Footer;