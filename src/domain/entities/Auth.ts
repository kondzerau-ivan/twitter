export enum AuthType {
  PASSWORD = 'PASSWORD',
  OAUTH = 'OAUTH',
  TOTP = 'TOTP',
}

export class Auth {
  /**
   * @param id - Уникальный идентификатор аутентификации
   * @param type - Тип аутентификации
   * @param secret - Секрет (пароль, токен и т.д.)
   */
  constructor(
    public readonly id: string,
    public readonly type: AuthType,
    public readonly secret: Buffer
  ) { }
}
