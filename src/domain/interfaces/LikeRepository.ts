import { Like, TargetType } from "../relationships/Like";
import { UserId, PostId, CommentId } from "../types/Identifiers";

export interface LikeRepository {
  /**
   * Получить все лайки пользователя.
   * @param userId - ID пользователя
   */
  findByUser(userId: UserId): Promise<Like[]>;

  /**
   * Получить все лайки для поста.
   * @param postId - ID поста
   */
  findByPost(postId: PostId): Promise<Like[]>;

  /**
   * Получить все лайки для комментария.
   * @param commentId - ID комментария
   */
  findByComment(commentId: CommentId): Promise<Like[]>;

  /**
   * Создать лайк.
   * @param like - Данные лайка
   */
  create(like: Like): Promise<Like>;

  /**
   * Удалить лайк.
   * @param userId - ID пользователя
   * @param targetId - ID поста или комментария
   * @param targetType - Тип цели лайка
   */
  delete(userId: UserId, targetId: PostId | CommentId, targetType: TargetType): Promise<void>;

  /**
   * Проверить наличие лайка.
   * @param userId - ID пользователя
   * @param targetId - ID поста или комментария
   * @param targetType - Тип цели лайка
   */
  exists(userId: UserId, targetId: PostId | CommentId, targetType: TargetType): Promise<boolean>;
}
