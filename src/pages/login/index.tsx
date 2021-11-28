import React,{ useState, useEffect } from 'react';
import { Button, DatePicker, Form, Input, Checkbox, Icon, message } from 'antd';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';
import loginBg from '@/assets/login_bg.jpg';
import styles from './index.less';

const LoginComponment: React.FC = props => {
  const { dispatch,form } = props;
  const {getFieldDecorator} = form;
  const handleSubmit = (e)=>{
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const {username,password} = values;
        if(username != 'admin') return message.error('未记录在册不得造次');
        if(password != 'admin') return message.error('宵小之辈不能擅入');
        dispatch({
          type: 'user/queryCurrentUser',
          payload: values,
        });
      }
    });
  };


  return (
    <>
      <img src={loginBg} className={styles.loginBg} alt=""/>
      <div className={styles.login}>
        <div className={styles.title}>来人通报 闲人免入</div>
        <div className={styles.titleNote}>天官赐福 百无禁忌</div>

        <Form onSubmit={handleSubmit} className={styles.loginForm}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{
                required: true,
                message: '前方來者報上名号!' }],
              })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="來者何人-admin"
            />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '前方来人报上暗语' }],
              })(
            <Input
              prefix={<Icon type="lock" autoComplete="on" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="暗号何为-admin"
            />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <div>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </div>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default withRouter(connect(({ user })=>({
  currentUser: user.currentUser,
}))(Form.create({})(LoginComponment)));



