import { AuthType } from "./Auth.js";

export class AuthInput {
  /**
   * @param type - Тип аутентификации
   * @param createdAt - Дата создания
   * @param expiresAt - Дата окончания действия
   * @param extra - Соль для секрета
   */
  constructor(
    public readonly type: AuthType,
    public readonly createdAt: Date,
    public readonly expiresAt: Date,
    public readonly extra: string,
  ) { }
}
