/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGESOCIAL_NAME } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryPostBySlug
// ====================================================

export interface QueryPostBySlug_cabecalho_links {
  __typename: "ComponentPageHeaderLink";
  name: string | null;
  url: string | null;
}

export interface QueryPostBySlug_cabecalho {
  __typename: "Cabecalho";
  links: (QueryPostBySlug_cabecalho_links | null)[] | null;
}

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

export interface QueryPostBySlug_rodape_links_link {
  __typename: "ComponentPageHeaderLink";
  id: string;
  name: string | null;
  url: string | null;
}

export interface QueryPostBySlug_rodape_links {
  __typename: "ComponentPageLinks";
  id: string;
  title: string | null;
  link: (QueryPostBySlug_rodape_links_link | null)[] | null;
}

export interface QueryPostBySlug_rodape_social {
  __typename: "ComponentPageSocial";
  name: ENUM_COMPONENTPAGESOCIAL_NAME;
  url: string;
}

export interface QueryPostBySlug_rodape {
  __typename: "Rodape";
  links: (QueryPostBySlug_rodape_links | null)[] | null;
  social: (QueryPostBySlug_rodape_social | null)[] | null;
}

export interface QueryPostBySlug {
  cabecalho: QueryPostBySlug_cabecalho | null;
  posts: QueryPostBySlug_posts[];
  rodape: QueryPostBySlug_rodape | null;
}

export interface QueryPostBySlugVariables {
  slug?: string | null;
}
