import { UserId, PostId, CommentId } from "../types/Identifiers";

export class Comment {
  /**
   * @param id - Уникальный идентификатор комментария
   * @param content - Текст комментария
   * @param postId - Идентификатор поста
   * @param authorId - Идентификатор автора комментария
   */
  constructor(
    public readonly id: CommentId,
    public content: string,
    public postId: PostId,
    public authorId: UserId,
  ) {}
}
