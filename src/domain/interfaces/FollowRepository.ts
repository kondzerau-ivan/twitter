import { Follow } from "../relationships/Follow.js";
import { UserId } from "../types/Identifiers.js";

export interface FollowRepository {
  /**
   * Получить всех, на кого подписан пользователь.
   * @param followerId - ID подписчика
   */
  findSubscriptions(followerId: UserId): Promise<Follow[]>;

  /**
   * Получить всех подписчиков пользователя.
   * @param followedId - ID пользователя, на которого подписались
   */
  findFollowers(followedId: UserId): Promise<Follow[]>;

  /**
   * Создать новую подписку.
   * @param follow - Данные подписки
   */
  create(follow: Follow): Promise<Follow>;

  /**
   * Удалить подписку.
   * @param followerId - ID подписчика
   * @param followedId - ID пользователя, на которого подписались
   */
  delete(followerId: UserId, followedId: UserId): Promise<void>;

  /**
   * Проверить наличие подписки.
   * @param followerId - ID подписчика
   * @param followedId - ID пользователя, на которого подписались
   */
  exists(followerId: UserId, followedId: UserId): Promise<boolean>;
}
