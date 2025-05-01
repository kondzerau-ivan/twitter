import { Comment } from "../entities/Comment";
import { CommentId, PostId, UserId } from "../types/Identifiers";

export interface CommentRepository {
  /**
   * Найти комментарий по идентификатору.
   * @param id - Идентификатор комментария
   */  
  get(id: CommentId): Promise<Comment | null>;

  /**
   * Получить все комментарии к посту.
   * @param postId - Идентификатор поста
   */
  findByPost(postId: PostId): Promise<Comment[]>;

  /**
   * Получить все комментарии автора.
   * @param authorId - Идентификатор автора
   */
  findByAuthor(authorId: UserId): Promise<Comment[]>;

  /**
   * Получить все комментарии автора к конкретному посту.
   * @param postId - Идентификатор поста
   * @param authorId - Идентификатор автора
   */  
  findByPostAndAuthor(postId: PostId, authorId: UserId): Promise<Comment[]>;

  /**
   * Создать новый комментарий.
   * @param comment - Данные комментария
   */
  create(comment: Comment): Promise<Comment>;

  /**
   * Обновить комментарий.
   * @param comment - Данные комментария
   */
  update(comment: Comment): Promise<Comment>;

  /**
   * Удалить комментарий по идентификатору.
   * @param commentId - Идентификатор комментария
   */
  delete(commentId: CommentId): Promise<void>;
}
