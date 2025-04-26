import { Post } from "../entities/Post";
import { PostId, UserId } from "../types/Identifiers";

export interface PostRepository {
  /**
   * Найти пост по идентификатору.
   * @param postId - Идентификатор поста
   */
  getById(postId: PostId): Promise<Post>;

  /**
   * Получить все посты автора.
   * @param authorId - Идентификатор автора
   */
  getAllByAuthorId(authorId: UserId): Promise<Post[]>;

  /**
   * Создать новый пост.
   * @param post - Данные поста
   */
  create(post: Post): Promise<Post>;

  /**
   * Обновить пост.
   * @param post - Данные поста
   */
  update(post: Post): Promise<Post>;

  /**
   * Удалить пост по идентификатору.
   * @param postId - Идентификатор поста
   */
  delete(postId: PostId): Promise<void>;
}
