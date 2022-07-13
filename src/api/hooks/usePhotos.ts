import {useQuery} from "react-query"
import {Photo} from '../photos/photos'
import {getPhotos} from '../photos/photos.client'


export const usePhotos = () => {
    return useQuery<Photo[]>("photos", () => getPhotos(20));
}