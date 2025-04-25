import { UserId } from "../types/Identifiers";

export class Follow {
  constructor(
    public readonly followerId: UserId,
    public readonly followedId: UserId
  ) {}
}
