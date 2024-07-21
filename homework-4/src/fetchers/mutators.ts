import IFormData from "@/typings/form";
import { IReview } from "@/typings/review";
import { fetcher } from "./fetcher";
import { IApiResponseReview } from "@/typings/apiResponse";
import { setUserDataToLocalStorage } from "@/components/shared/utilities/LocalStorage/LocalStorage";

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
  setUserDataToLocalStorage(response.headers);

  if (!response.ok) {
    throw new Error(`Failed to mutate on ${url}`);
  }

  return response.json();
}

export function createReview(url: string, { arg }: { arg: IReview }): Promise<IApiResponseReview> {
  const bodyData = {
    comment: arg.comment,
    rating: arg.rating,
    show_id: arg.show_id
  }
  return fetcher(url, {
    method: 'POST',
    headers: {
      Accept: "application/json",
      "access-token": localStorage.getItem("access-token") || "",
      client: localStorage.getItem("client") || "",
      "token-type": "Bearer",
      expiry: "1719238397",
      uid: localStorage.getItem("uid") || "",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyData)
 });
}

export function deleteReview(url: string): Promise<IApiResponseReview> {
  return fetcher(url, {
    method: 'DELETE',
    headers: {
      Accept: "application/json",
      "access-token": localStorage.getItem("access-token") || "",
      client: localStorage.getItem("client") || "",
      "token-type": "Bearer",
      expiry: localStorage.getItem("expiry") || "17192383970",
      uid: localStorage.getItem("uid") || "",
      "Content-Type": "application/json"
    }
  });
}

export function updateReview(url: string, { arg }: { arg: IReview }): Promise<IApiResponseReview> {
  const bodyData = {
    comment: arg.comment,
    rating: arg.rating,
    show_id: arg.show_id
  }
  return fetcher(url, {
    method: 'PUT',
    headers: {
      Accept: "application/json",
      "access-token": localStorage.getItem("access-token") || "",
      client: localStorage.getItem("client") || "",
      "token-type": "Bearer",
      expiry: localStorage.getItem("expiry") || "17192383970",
      uid: localStorage.getItem("uid") || "",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyData)
  });
}
