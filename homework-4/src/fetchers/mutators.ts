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

  if (!response.ok) {
    throw new Error(`Failed to mutate on ${url}`);
  }

  return response.json();
}
