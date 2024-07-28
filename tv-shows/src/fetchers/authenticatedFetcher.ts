export async function authenticatedFetcher(url: string, method: string, arg: any) {
    try {
      const userData = JSON.parse(localStorage.getItem('userData') || '');
      const response = await fetch(url, {
        method: method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "access-token": userData.accessToken,
          "client": userData.client,
          "uid": userData.email,
          "token-type": "bearer"
        },
        body: JSON.stringify(arg),
      });
  
      return await response.json();
  
    } catch(error: any) {
      return error;
    }
  }