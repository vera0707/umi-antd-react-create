import React,{ useState, useEffect} from 'react';
import {Avatar} from 'antd';
import { ClickParam } from 'antd/es/menu';
import {connect} from 'dva';
import withRouter from 'umi/withRouter';
import {Button,Popconfirm,Dropdown,Menu,Icon} from 'antd';
import styles from './index.css';
import { router } from 'umi';


const BasicLayout: React.FC = props => {
  const  {dispatch,currentUser,isLogin} = props;

  const onMenuClick = (event: ClickParam) => {
    const { key } = event;
    if (key === 'logout') {
      dispatch({
        type: 'user/logoutCurrentUser',
        payload: null,
      });
      router.push({pathname: '/login'});
      return;
    }
  };

  const userMenu = (<Menu onClick={onMenuClick}>
    <Menu.Item key="center">
      <Icon type="user" />
      <span>个人中心</span>
    </Menu.Item>
    <Menu.Item key="settings">
      <Icon type="setting" />
      <span>个人设置</span>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="logout">
      <Icon type="logout" />
      <span>退出登录</span>
    </Menu.Item>
  </Menu>);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerCon}>
          <div className={styles.headerTitle}>問靈十三載</div>
          { isLogin ? <Dropdown overlay={userMenu}>
            <span>
              <img src={currentUser.avatar} alt="" width="20"/>
              <span className={styles.username}>{currentUser.name}</span>
            </span>
          </Dropdown>
            :
            <Button onClick={()=>router.push('/login')}>登录</Button>
            }
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default withRouter(connect(({ user })=>({
  isLogin: user.isLogin,
  currentUser: user.currentUser,
}))(BasicLayout));
