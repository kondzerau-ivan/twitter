import { UserId, PostId } from "../types/Identifiers";

export class Post {
  constructor(
    public readonly id: PostId,
    public readonly content: string,
    public readonly authorId: UserId,
  ) {}
}
