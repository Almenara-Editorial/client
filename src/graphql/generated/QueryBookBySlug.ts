/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryBookBySlug
// ====================================================

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

export interface QueryBookBySlug {
  livros: QueryBookBySlug_livros[];
}

export interface QueryBookBySlugVariables {
  slug?: string | null;
}
