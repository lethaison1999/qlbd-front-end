
// check is authenticated ?
export const checkAuth = () => {
  const json = localStorage.getItem('auth');
  const auth = JSON.parse(json);

  if (!auth) {
    return false;
  }

  return auth.token !== undefined;
}

// save auth data: token...
export const saveAuthData = (authData) => {  
  localStorage.setItem('auth', JSON.stringify(authData));
}

export const logout = () => {
  localStorage.removeItem('auth');
}

export const getHeaders = () => {
  const json = localStorage.getItem('auth');
  const auth = JSON.parse(json);

  if (!auth) {
    return {};
  }

  return { Authorization: 'Bearer ' + auth.token };
}

export const getCurrentUser = () => {
  const json = localStorage.getItem('auth');
  const auth = JSON.parse(json);

  if (!auth) {
    return {};
  }

  return auth;
}
