import React from 'react';
import { Button,Form } from 'antd';
import {connect} from 'dva';
import withRouter from 'umi/withRouter';
import welcomeSvg from '@/assets/welcome.svg';
import styles from './index.css';

const LoginComponment: React.FC = props => {
  const {currentUser} = props;

  if(!currentUser) return (
    <div className={styles.container}>
      <img src={welcomeSvg} className={styles.welcomeBg} alt="logo" />
      <div className={styles.welcomeTitle}>歡迎</div>
      <div className={styles.welcomeNote}>問靈/縛靈/祭靈/喚靈/攝靈</div>
    </div>
  );

  return (
    <div className={styles.container}>
      <img src={welcomeSvg} className={styles.welcomeBg} alt="logo" />
      <div className={styles.welcomeTitle}>歡迎</div>
      <div className={styles.welcomeNote}>問靈/縛靈/祭靈/喚靈/攝靈</div>
    </div>
  );
};

export default withRouter(connect(({ user })=>({
  currentUser: user.currentUser,
}))(Form.create({})(LoginComponment)));
