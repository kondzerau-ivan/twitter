import { UserId, PostId, CommentId } from "../types/Identifiers";

export type TargetId = PostId | CommentId;

export class Like {
  constructor(
    public readonly userId: UserId,
    public readonly targetId: TargetId
  ) {}
}
