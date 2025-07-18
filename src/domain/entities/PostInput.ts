import { UserId } from "../types/Identifiers.js";

export class PostInput {
  /**
   * @param content - Содержимое поста
   * @param authorId - Идентификатор автора поста
   */
  constructor(
    public readonly content: string,
    public readonly authorId: UserId,
  ) { }
}
