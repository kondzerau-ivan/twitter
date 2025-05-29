import { Auth } from "../entities/Auth.js";
import { AuthId } from "../types/Identifiers.js";

export interface AuthRepository {
  /**
   * Найти аутентификацию по идентификатору.
   * @param id - Уникальный идентификатор аутентификации
   */
  get(id: AuthId): Promise<Auth | null>;

  /**
   * Создать новую запись аутентификации.
   * @param auth - Данные аутентификации
   */
  create(auth: Auth): Promise<Auth>;

  /**
   * Обновить запись аутентификации.
   * @param auth - Данные аутентификации
   */
  update(auth: Auth): Promise<Auth>;

  /**
   * Удалить запись аутентификации по идентификатору.
   * @param id - Уникальный идентификатор аутентификации
   */
  delete(id: AuthId): Promise<void>;
}
