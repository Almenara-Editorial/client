/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryBookBySlug
// ====================================================

export interface QueryBookBySlug_livros_image {
  __typename: "UploadFile";
  src: string;
  label: string | null;
}

export interface QueryBookBySlug_livros {
  __typename: "Livro";
  id: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  particulars: string | null;
  description: string;
  image: QueryBookBySlug_livros_image | null;
}

export interface QueryBookBySlug {
  livros: QueryBookBySlug_livros[];
}

export interface QueryBookBySlugVariables {
  slug?: string | null;
}
