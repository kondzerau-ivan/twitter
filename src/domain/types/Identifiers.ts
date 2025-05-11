/**
 * Тип для создания брендированных идентификаторов.
 * @template K - базовый тип (например, string)
 * @template T - уникальный тег бренда
 */
type Brand<K,T> = K & {__brand: T};

export type AuthId = {
  id: string;
  secret: Buffer;
};;
export type UserId = Brand<string, 'UserId'>;
export type PostId = Brand<string, 'PostId'>;
export type CommentId = Brand<string, 'CommentId'>;
