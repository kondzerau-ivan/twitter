import { User } from "../entities/User.js";
import { UserId } from "../types/Identifiers.js";

export interface UserRepository {
  /**
   * Найти пользователя по идентификатору.
   * @param userId - Идентификатор пользователя
   */
  get(userId: UserId): Promise<User | null>;

  /**
   * Создать нового пользователя.
   * @param user - Данные пользователя
   */
  create(user: User): Promise<User>;

  /**
   * Обновить данные пользователя.
   * @param user - Данные пользователя
   */
  update(user: User): Promise<User>;

  /**
   * Удалить пользователя по идентификатору.
   * @param userId - Идентификатор пользователя
   */
  delete(userId: UserId): Promise<void>;

  /**
   * Получить всех пользователей.
   */
  getAll(): Promise<User[]>;

  /**
   * Проверить имя на существование
   * @param username - Имя пользователя
   */
  checkUsername(username: string): boolean;
}
