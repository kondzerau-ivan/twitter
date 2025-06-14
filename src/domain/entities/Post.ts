import { UserId, PostId } from "../types/Identifiers.js";

export class Post {
  /**
   * @param id - Уникальный идентификатор поста
   * @param content - Содержимое поста
   * @param authorId - Идентификатор автора поста
   */
  constructor(
    public readonly id: PostId,
    public readonly content: string,
    public readonly authorId: UserId,
  ) { }
}
