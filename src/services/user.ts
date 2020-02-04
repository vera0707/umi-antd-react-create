import request from '@/utils/request';

export async function queryCurrentUser(): Promise<any> {
  return request('/api/currentUser');
}
