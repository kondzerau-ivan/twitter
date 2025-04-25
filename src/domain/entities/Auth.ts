export enum AuthType {
  PASSWORD = 'PASSWORD',
  OAUTH = 'OAUTH',
  TOTP = 'TOTP',
}

export class Auth {
  constructor(
    public readonly id: string,
    public readonly type: AuthType,
    public readonly secret: Buffer
  ) {}
}
