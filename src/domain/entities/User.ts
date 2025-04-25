import { UserId } from "../types/Identifiers";

export class User {
  constructor(
    public readonly id: UserId,
    public readonly username: string
  ) {}
}
