import { Post } from "./Post";

export interface PostResponse {
  success: boolean;
  data: Post[];
}
