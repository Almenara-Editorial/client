/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGESOCIAL_NAME } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryBookBySlug
// ====================================================

export interface QueryBookBySlug_cabecalho_links {
  __typename: "ComponentPageHeaderLink";
  name: string | null;
  url: string | null;
}

export interface QueryBookBySlug_cabecalho {
  __typename: "Cabecalho";
  links: (QueryBookBySlug_cabecalho_links | null)[] | null;
}

export interface QueryBookBySlug_livros_authors {
  __typename: "Author";
  name: string | null;
}

export interface QueryBookBySlug_livros_image {
  __typename: "UploadFile";
  src: string;
  label: string | null;
}

export interface QueryBookBySlug_livros_disccounts {
  __typename: "Disccount";
  minQuantity: number | null;
  percentage: number;
}

export interface QueryBookBySlug_livros {
  __typename: "Livro";
  id: string;
  name: string;
  slug: string;
  price: number;
  authors: QueryBookBySlug_livros_authors[];
  promoPrice: number | null;
  stock: number;
  particulars: string | null;
  description: string;
  image: QueryBookBySlug_livros_image[];
  disccounts: QueryBookBySlug_livros_disccounts[];
}

export interface QueryBookBySlug_rodape_links_link {
  __typename: "ComponentPageHeaderLink";
  id: string;
  name: string | null;
  url: string | null;
}

export interface QueryBookBySlug_rodape_links {
  __typename: "ComponentPageLinks";
  id: string;
  title: string | null;
  link: (QueryBookBySlug_rodape_links_link | null)[] | null;
}

export interface QueryBookBySlug_rodape_social {
  __typename: "ComponentPageSocial";
  name: ENUM_COMPONENTPAGESOCIAL_NAME;
  url: string;
}

export interface QueryBookBySlug_rodape {
  __typename: "Rodape";
  links: (QueryBookBySlug_rodape_links | null)[] | null;
  social: (QueryBookBySlug_rodape_social | null)[] | null;
}

export interface QueryBookBySlug {
  cabecalho: QueryBookBySlug_cabecalho | null;
  livros: QueryBookBySlug_livros[];
  rodape: QueryBookBySlug_rodape | null;
}

export interface QueryBookBySlugVariables {
  slug?: string | null;
}
