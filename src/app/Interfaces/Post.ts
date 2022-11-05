import { PostImg } from "./PostImg";
import { User } from "./User";

export interface Post {
    _id: string,
    user: User,
    postImg: PostImg,
    tags?: string[]
}
