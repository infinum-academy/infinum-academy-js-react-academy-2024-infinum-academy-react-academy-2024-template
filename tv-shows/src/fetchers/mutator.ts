export async function mutator(url: string, { arg }: { arg: any }) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(arg),
    });

    return await response;
  }