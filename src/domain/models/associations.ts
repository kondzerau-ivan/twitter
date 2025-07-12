import { Auth } from "./Auth";
import { User } from "./User";
import { Post } from "./Post";
import { Comment } from "./Comment";
import { Follow } from "./Follow";
import { Like } from "./Like";

export function defineAssociations() {

  User.hasOne(Auth, {
    foreignKey: "userId",
    as: "auth"
  });

  Auth.belongsTo(User, {
    foreignKey: "userId",
    as: "user"
  });

  User.hasMany(Post, {
    foreignKey: "authorId",
    as: "posts"
  });

  Post.belongsTo(User, {
    foreignKey: "authorId",
    as: "author"
  });

  User.hasMany(Comment, {
    foreignKey: "authorId",
    as: "comments"
  });

  Comment.belongsTo(User, {
    foreignKey: "authorId",
    as: "author"
  });

  Post.hasMany(Comment, {
    foreignKey: "postId",
    as: "comments"
  });

  Comment.belongsTo(Post, {
    foreignKey: "postId",
    as: "post"
  });

  User.belongsToMany(User, {
    through: Follow,
    as: "followers", // подписчики
    foreignKey: "followedId", // на кого подписались
    otherKey: "followerId" // кто подписался
  });

  User.belongsToMany(User, {
    through: Follow,
    as: "followings", // подписки
    foreignKey: "followerId", // кто подписан
    otherKey: "followingId"   // на кого подписан
  });

  User.hasMany(Like, {
    foreignKey: 'userId',
    as: 'likes',
  });

  Like.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
  });

  Post.hasMany(Like, {
    foreignKey: 'targetId',
    constraints: false,
    scope: { targetType: 'post' },
  });

  Like.belongsTo(Post, {
    foreignKey: 'targetId',
    constraints: false,
  });

  Comment.hasMany(Like, {
    foreignKey: 'targetId',
    constraints: false,
    scope: { targetType: 'comment' },
  });

  Like.belongsTo(Comment, {
    foreignKey: 'targetId',
    constraints: false,
  });
}

