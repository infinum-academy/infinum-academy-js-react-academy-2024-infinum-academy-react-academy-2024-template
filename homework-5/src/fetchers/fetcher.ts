export async function fetcher<T>(input: string | URL | globalThis.Request, init?: RequestInit): Promise<T> {
  try {
    const headers = {
      ...init?.headers,
      uid: localStorage.getItem('uid') || '',
      client: localStorage.getItem('client') || '',
      'access-token': localStorage.getItem('access-token') || ''
    };
    const response = await fetch(input, { ...init, headers });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    if(response.status === 204) return {} as T;
    return await response.json();
  } catch (error) {
    throw new Error(`Response status: ${error}`);
  }
}
