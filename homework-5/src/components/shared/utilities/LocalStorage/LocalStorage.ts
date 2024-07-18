export const setUserDataToLocalStorage = (response: any) => {
  const client = response.get('client');
  const accessToken = response.get('access-token');
  const uid = response.get('uid');
  
  if (client && accessToken && uid) {
    localStorage.setItem('client', client);
    localStorage.setItem('access-token', accessToken);
    localStorage.setItem('uid', uid);
  }
}

export const clearLocalStorage = () => {
  localStorage.removeItem("uid");
  localStorage.removeItem("access-token");
  localStorage.removeItem("client");
}