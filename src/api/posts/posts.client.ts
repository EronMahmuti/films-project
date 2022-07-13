import { apiRequest } from "../Api";
import { Post } from "./posts";

export const getPosts = async (_limit: number) => {
  return apiRequest<{}, Post[]>({
    url: "posts",
    method: "GET",
    params:{
        _limit,
    },
  })
    .then((res) => res.data);
};
