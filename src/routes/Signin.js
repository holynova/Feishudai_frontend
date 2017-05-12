import React from 'react';
import { connect } from 'dva';
import styles from './Signin.css';

function Signin() {
  return (
    <div className={styles.normal}>
      Route Component: Signin
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Signin);
