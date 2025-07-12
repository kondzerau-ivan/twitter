import { Auth } from "./Auth";
import { User } from "./User";
import { Post } from "./Post";
import { Comment } from "./Comment";
import { Follow } from "./Follow";
import { Like } from "./Like";
import { defineAssociations } from "./associations";

defineAssociations();

export const models = { Auth, User, Post, Comment, Like, Follow };
