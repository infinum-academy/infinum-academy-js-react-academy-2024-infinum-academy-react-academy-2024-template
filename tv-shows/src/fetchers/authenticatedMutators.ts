import { authenticatedFetcher } from "./authenticatedFetcher";

export async function authenticatedCreator(url: string, { arg }: { arg: any }) {
  return authenticatedFetcher(url, 'POST', arg);
}

export async function authenticatedDeleter(url: string, { arg }: { arg: any }) {
  return authenticatedFetcher(url, 'DELETE', arg);
}