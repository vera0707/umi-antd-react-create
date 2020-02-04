import request from '@/utils/request';

export async function queryCurrentUser(): Promise<any> {
  console.log('back to you');
  return request('/api/currentUser');
}
