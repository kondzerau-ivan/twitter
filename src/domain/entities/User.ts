import { UserId } from "../types/Identifiers.js";

export class User {
  /**
   * @param id - Уникальный идентификатор пользователя
   * @param username - Имя пользователя
   */
  constructor(
    public readonly id: UserId,
    public readonly username: string
  ) { }
}
