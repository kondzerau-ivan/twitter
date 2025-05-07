import { UserId, PostId, CommentId } from "../types/Identifiers";

export type TargetType = 'post' | 'comment';

export class Like {
  /**
   * @param userId - ID пользователя, поставившего лайк
   * @param targetId - ID поста или комментария
   * @param targetType - Тип цели лайка: 'post' или 'comment'
   */
  constructor(
    public readonly userId: UserId,
    public readonly targetId: PostId | CommentId,
    public readonly targetType: TargetType
  ) {}
}
