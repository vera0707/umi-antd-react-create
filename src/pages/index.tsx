import React from 'react';
import styles from './index.css';
import { Button } from 'antd';
import welcomeSvg from '@/assets/welcome.svg';

export default function() {
  return (
    <div className={styles.container}>
      <img src={welcomeSvg} className={styles.welcomeBg} alt="logo" />
      <div className={styles.welcomeTitle}>歡迎</div>
      <div className={styles.welcomeNote}>問靈/縛靈/祭靈/喚靈/攝靈</div>
    </div>
  );
}
