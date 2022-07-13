import {useQuery} from "react-query"
import {Post} from '../posts/posts'
import {getPosts} from '../posts/posts.client'


export const usePosts = () => {
    return useQuery<Post[]>("posts", () => getPosts(20));
}