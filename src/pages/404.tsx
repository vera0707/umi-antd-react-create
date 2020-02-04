import React from 'react';
import { Button } from 'antd';
import router from 'umi/router';
import notFindSvg from '@/assets/404.svg';


export default function () {
  return (
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <img src={notFindSvg} className="App-logo" alt="logo" />
        <div style={{color: 'rgba(0,0,0,.85)', fontSize: '24px', marginTop: 10}}>404</div>
        <div style={{color: 'rgba(0,0,0,.45)', fontSize: '14px', marginTop: 10}}>Sorry, the page you visited does not exist.</div>
        <Button type="primary" style={{marginTop: 32}} onClick={()=>router.go(-1)}>Back Home</Button>
      </div>
  );
}
