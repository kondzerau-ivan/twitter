import { AuthId } from '../types/Identifiers.ts';

export enum AuthType {
  PASSWORD = 'PASSWORD',
  OAUTH = 'OAUTH',
  TOTP = 'TOTP',
}

export class Auth {
  /**
   * @param id - Уникальный идентификатор аутентификации
   * @param type - Тип аутентификации
   * @param createdAt - Дата создания
   * @param expiresAt - Дата окончания действия
   * @param extra - Соль для секрета
   */
  constructor(
    public readonly id: AuthId,
    public readonly type: AuthType,
    public readonly createdAt: Date,
    public readonly expiresAt: Date,
    public readonly extra: string,
  ) {}
}
