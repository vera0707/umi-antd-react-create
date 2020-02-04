import React,{ useState, useEffect } from 'react';
import { Button, DatePicker } from 'antd';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';

const UserComponment: React.FC = props => {
  //const { dispatch } = props;


  //useEffect(() => {
  //  if (dispatch) {
  //    dispatch({
  //      type: 'user/queryCurrentUser',
  //      payload: null
  //    });
  //  }
  //}, []);


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



