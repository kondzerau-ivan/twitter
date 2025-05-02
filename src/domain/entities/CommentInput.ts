export class CommentInput {
  /**
   * @param content - Текст комментария
   * @param authorId - Идентификатор автора 
   * @param postId - Идентификатор поста
   */
  constructor(
    public readonly content: string,
    public readonly authorId: string,
    public readonly postId: string,
  ) {}
}
