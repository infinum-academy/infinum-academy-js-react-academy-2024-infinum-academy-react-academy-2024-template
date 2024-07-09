import { IReview } from "@/typings/review";

export function getItemFromLocalStorage() {
  return JSON.parse(localStorage.getItem("reviewarray") || "[]");
}

export function saveToLocalStorage(key: string, value: IReview[]) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeLocalStorageItem(){
  localStorage.removeItem("reviewarray");
}

