import { Effect } from 'dva';
import { Reducer } from 'redux';
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
    *queryCurrentUser({ payload }, { call, put }) {
      const response = yield call(queryCurrentUser, payload);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
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
        isLogin: action.payload && action.payload.name,
        currentUser: action.payload || {},
      };
    },
  }
};

export default UserModel;

