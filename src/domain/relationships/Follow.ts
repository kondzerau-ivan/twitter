import { UserId } from "../types/Identifiers";

export class Like {
  constructor(
    public readonly followerId: UserId,
    public readonly followedId: UserId
  ) {}
}
