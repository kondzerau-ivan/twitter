import { UserId, PostId, CommentId } from "../types/Identifiers";

export class Like {
  constructor(
    public readonly userId: UserId,
    public readonly postId: PostId,
    public readonly commentId: CommentId
  ) {}
}
