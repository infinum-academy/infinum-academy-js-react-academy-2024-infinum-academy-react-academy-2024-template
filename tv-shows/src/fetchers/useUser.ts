import useSWR from "swr"
import { swrKeys } from "./swrKeys";
import { fetcher } from "./fetcher";

export const useUser = () => {
    return useSWR<JSON>(swrKeys.me, fetcher);
}