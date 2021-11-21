/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryPostBySlug
// ====================================================

export interface QueryPostBySlug_posts_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryPostBySlug_posts_user {
  __typename: "AdminUser";
  firstname: string;
  lastname: string;
}

export interface QueryPostBySlug_posts {
  __typename: "Post";
  id: string;
  title: string;
  slug: string | null;
  cover: QueryPostBySlug_posts_cover | null;
  excerpt: string | null;
  content: string;
  created_at: any;
  user: QueryPostBySlug_posts_user | null;
}

export interface QueryPostBySlug {
  posts: QueryPostBySlug_posts[];
}

export interface QueryPostBySlugVariables {
  slug?: string | null;
}
