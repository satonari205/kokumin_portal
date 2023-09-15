import { configureAuth } from 'react-query-auth';

const { useUser, useLogin, useRegister, useLogout } = configureAuth({
  userFn: () => api.get('/me'),
  loginFn: (username,password) => api.post('/login', username,password),
  registerFn: (username,nickname,password) => api.post('/register',username,nickname,password),
  logoutFn: () => api.post('/logout'),
});