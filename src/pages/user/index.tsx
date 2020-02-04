import React,{ useState, useEffect } from 'react';
import { Button, DatePicker } from 'antd';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';

const UserComponment: React.FC = props => {

  return (
    <>
      <Button type="primary">测试</Button>
      This is user page
    </>
  );
};

export default withRouter(connect(({ user })=>({
  currentUser: user.currentUser,
}))(UserComponment));



