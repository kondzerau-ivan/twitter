import { User } from "../entities/User";
import { UserId } from "../types/Identifiers";

export interface UserRepository {
  /**
   * Получить всех пользователей.
   */
  getAll(): Promise<User[]>;

  /**
   * Найти пользователя по идентификатору.
   * @param userId - Идентификатор пользователя
   */
  getById(userId: UserId): Promise<User | null>;

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
}
