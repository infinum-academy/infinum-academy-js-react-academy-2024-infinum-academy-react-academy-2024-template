import IFormData from "@/typings/form";

export async function mutator(url: string, { arg }: { arg: IFormData }) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${arg}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(arg)
  })
  const client = response.headers.get('client');
  const accessToken = response.headers.get('access-token');
  const uid = response.headers.get('uid');
  
  if (client && accessToken && uid) {
    localStorage.setItem('client', client);
    localStorage.setItem('access-token', accessToken);
    localStorage.setItem('uid', uid);
  }

  if (!response.ok) {
    throw new Error(`Failed to mutate on ${url}`);
  }

  return response.json();
}