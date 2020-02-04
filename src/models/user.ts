import { Effect } from 'dva';
import { Reducer } from 'redux';
import { router } from 'umi';
import { queryCurrentUser } from '@/services/user';

export interface StateType {
  status?: 'ok' | 'error';
  type?: string;
  currentAuthority?: 'user' | 'guest' | 'admin';
}

export interface UserModelType {
  namespace: string;
  state: StateType;
  reducers: {};
}

const UserModel: UserModelType = {
  namespace: 'user',
  state: {
    currentUser: {},
    isLogin: false,
  },
  effects: {
    *queryCurrentUser({ payload,callback }, { call, put }){
      const response = yield call(queryCurrentUser, payload);
      yield put({
        type: 'saveCurrentUser',
        payload: {
          ...response,
          name: payload.username
        },
      });
      router.replace({pathname: '/'});
    },
    *logoutCurrentUser({ payload }, { call, put }){
      yield put({
        type: 'saveCurrentUser',
        payload: null,
      });
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return {
        ...state,
        isLogin: action.payload && action.payload.name ? true : false,
        currentUser: action.payload || {},
      };
    },
  }
};

export default UserModel;

