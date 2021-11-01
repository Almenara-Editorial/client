/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGESOCIAL_NAME } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryBooks
// ====================================================

export interface QueryBooks_cabecalho_links {
  __typename: "ComponentPageHeaderLink";
  name: string | null;
  url: string | null;
}

export interface QueryBooks_cabecalho {
  __typename: "Cabecalho";
  links: (QueryBooks_cabecalho_links | null)[] | null;
}

export interface QueryBooks_recommended_authors {
  __typename: "Author";
  name: string | null;
}

export interface QueryBooks_recommended_image {
  __typename: "UploadFile";
  src: string;
  formats: any | null;
}

export interface QueryBooks_recommended_disccounts {
  __typename: "Disccount";
  minQuantity: number | null;
  percentage: number;
}

export interface QueryBooks_recommended {
  __typename: "Livro";
  id: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  promoPrice: number | null;
  authors: QueryBooks_recommended_authors[];
  image: QueryBooks_recommended_image[];
  disccounts: QueryBooks_recommended_disccounts[];
}

export interface QueryBooks_livros_authors {
  __typename: "Author";
  name: string | null;
}

export interface QueryBooks_livros_image {
  __typename: "UploadFile";
  src: string;
  formats: any | null;
}

export interface QueryBooks_livros_disccounts {
  __typename: "Disccount";
  minQuantity: number | null;
  percentage: number;
}

export interface QueryBooks_livros {
  __typename: "Livro";
  id: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  promoPrice: number | null;
  authors: QueryBooks_livros_authors[];
  image: QueryBooks_livros_image[];
  disccounts: QueryBooks_livros_disccounts[];
}

export interface QueryBooks_rodape_links_link {
  __typename: "ComponentPageHeaderLink";
  id: string;
  name: string | null;
  url: string | null;
}

export interface QueryBooks_rodape_links {
  __typename: "ComponentPageLinks";
  id: string;
  title: string | null;
  link: (QueryBooks_rodape_links_link | null)[] | null;
}

export interface QueryBooks_rodape_social {
  __typename: "ComponentPageSocial";
  name: ENUM_COMPONENTPAGESOCIAL_NAME;
  url: string;
}

export interface QueryBooks_rodape {
  __typename: "Rodape";
  links: (QueryBooks_rodape_links | null)[] | null;
  social: (QueryBooks_rodape_social | null)[] | null;
}

export interface QueryBooks_categorias {
  __typename: "Categorias";
  name: string;
  slug: string;
}

export interface QueryBooks {
  cabecalho: QueryBooks_cabecalho | null;
  recommended: QueryBooks_recommended[];
  livros: QueryBooks_livros[];
  rodape: QueryBooks_rodape | null;
  categorias: QueryBooks_categorias[];
}

export interface QueryBooksVariables {
  limit?: number | null;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
  recommended?: any | null;
}
