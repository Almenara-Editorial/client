/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryBlog
// ====================================================

export interface QueryBlog_posts_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryBlog_posts_user {
  __typename: "AdminUser";
  firstname: string;
  lastname: string;
}

export interface QueryBlog_posts {
  __typename: "Post";
  id: string;
  title: string;
  slug: string | null;
  cover: QueryBlog_posts_cover | null;
  excerpt: string | null;
  created_at: any;
  user: QueryBlog_posts_user | null;
}

export interface QueryBlog {
  posts: QueryBlog_posts[];
}
