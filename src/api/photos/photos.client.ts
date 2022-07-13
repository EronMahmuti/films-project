import { Photo } from "./photos";
import { apiRequest } from "../Api";

export const getPhotos = async (_limit: number) => {
  return apiRequest<{}, Photo[]>({
    url: "photos",
    method: "GET",
    params: {
      _limit,
    },
  }).then((res) => res.data);
};
