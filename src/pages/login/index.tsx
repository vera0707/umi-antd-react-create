import React,{ useState, useEffect } from 'react';
import { Button, DatePicker, Form, Input, Checkbox, Icon, message } from 'antd';
import { connect } from 'dva';
import withRouter from 'umi/withRouter';
import styles from './index.less';

const LoginComponment: React.FC = props => {
  const { dispatch,form } = props;
  const {getFieldDecorator} = form;
  const handleSubmit = (e)=>{
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const {username,password} = values;
        if(username != '魏无羡') return message.error('仅容许魏无羡进入');
        if(password != '随便') return message.error('仅容许携带随便');
        dispatch({
          type: 'user/queryCurrentUser',
          payload: values,
        });
      }
    });
  };


  return (
    <div className={styles.login}>
        <div className={styles.title}>問靈十三載 尋一不歸人</div>
        <div className={styles.titleNote}>夷陵老祖何在</div>

      <Form onSubmit={handleSubmit} className={styles.loginForm}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{
              required: true,
              message: '前方來者報上姓名!' }],
            })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="來者何人-魏无羡"
          />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '前方來者所佩何劍' }],
            })(
          <Input
            prefix={<Icon type="lock" autoComplete="on" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="所佩何劍-随便"
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
              遁鬼门
            </Button>
          </div>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default withRouter(connect(({ user })=>({
  currentUser: user.currentUser,
}))(Form.create({})(LoginComponment)));



