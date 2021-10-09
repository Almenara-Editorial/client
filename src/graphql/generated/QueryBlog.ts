/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGESOCIAL_NAME } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryBlog
// ====================================================

export interface QueryBlog_cabecalho_links {
  __typename: "ComponentPageHeaderLink";
  name: string | null;
  url: string | null;
}

export interface QueryBlog_cabecalho {
  __typename: "Cabecalho";
  links: (QueryBlog_cabecalho_links | null)[] | null;
}

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

export interface QueryBlog_rodape_links_link {
  __typename: "ComponentPageHeaderLink";
  id: string;
  name: string | null;
  url: string | null;
}

export interface QueryBlog_rodape_links {
  __typename: "ComponentPageLinks";
  id: string;
  title: string | null;
  link: (QueryBlog_rodape_links_link | null)[] | null;
}

export interface QueryBlog_rodape_social {
  __typename: "ComponentPageSocial";
  name: ENUM_COMPONENTPAGESOCIAL_NAME;
  url: string;
}

export interface QueryBlog_rodape {
  __typename: "Rodape";
  links: (QueryBlog_rodape_links | null)[] | null;
  social: (QueryBlog_rodape_social | null)[] | null;
}

export interface QueryBlog {
  cabecalho: QueryBlog_cabecalho | null;
  posts: QueryBlog_posts[];
  rodape: QueryBlog_rodape | null;
}
