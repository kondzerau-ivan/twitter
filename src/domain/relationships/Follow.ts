import { UserId } from "../types/Identifiers";

export class Follow {
  /**
   * @param followerId - ID подписчика
   * @param followedId - ID пользователя, на которого подписались
   */
  constructor(
    public readonly followerId: UserId,
    public readonly followedId: UserId
  ) {}
}
