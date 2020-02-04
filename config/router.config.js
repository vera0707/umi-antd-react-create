export default [
  {
    path: '/login',
    component: './login',
    title: '问灵',
  },
  {
    path: '/',
    component: '../layouts/basicLayout',
    routes: [
      {
        path: '/',
        component: './index',
        title: '尋道',
      },
      {
        path: '/index',
        component: './index',
        title: '尋道',
      },
      { path: '/user', component: './user',title: '陳情'},
      { path: '/*',component: './404', }
    ]
  },
];
