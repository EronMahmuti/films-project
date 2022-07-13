import { useQuery } from "react-query";
import { Comment } from "../comments/comments";
import { getComments } from "../comments/comments.client";

export const useComments = () => {
  return useQuery<Comment[]>("photos", () => getComments(20));
};
