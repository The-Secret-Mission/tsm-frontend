const backaddr = 'http://localhost:8080';

/* Authentication */
export const PATH_SIGNUP = backaddr + '/auth/signup';
export const PATH_LOGIN = backaddr + '/auth/login';
export const PATH_CHECKLOGIN = backaddr + '/auth/checklogin';

/* User */
export const PATH_USER = (userid: string) => {
  return backaddr + '/user/' + userid;
};

/* Organization */
