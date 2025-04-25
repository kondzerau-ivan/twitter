import { UserId, PostId } from "../types/Identifiers";

export class Like {
  constructor(
    public readonly userId: UserId,
    public readonly postId: PostId
  ) {}
}
