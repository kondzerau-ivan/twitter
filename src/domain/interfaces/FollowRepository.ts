import { Follow } from "../relationships/Follow";
import { UserId } from "../types/Identifiers";

export interface FollowRepository {
  /**
   * Получить всех, на кого подписан пользователь.
   * @param followerId - ID подписчика
   */
  getFollowedByUser(followerId: UserId): Promise<Follow[]>;

  /**
   * Получить всех подписчиков пользователя.
   * @param followedId - ID пользователя, на которого подписались
   */
  getFollowersOfUser(followedId: UserId): Promise<Follow[]>;

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
