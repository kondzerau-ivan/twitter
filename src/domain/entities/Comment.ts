import { UserId, PostId } from "../types/Identifiers";

export class Comment {
  constructor(
    public readonly id: string,
    public content: string,
    public postId: PostId,
    public authorId: UserId,
  ) {}
}
