import { apiRequest } from "../Api";
import { Comment } from "./comments";

export const getComments = async (_limit: number) => {
  return apiRequest<{}, Comment[]>({
    url: "comments",
    method: "GET",
    params: {
      _limit,
    },
  }).then((res) => res.data);
};
