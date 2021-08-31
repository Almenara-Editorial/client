/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProductBySlug
// ====================================================

export interface QueryProductBySlug_livros_image {
  __typename: "UploadFile";
  src: string;
  label: string | null;
}

export interface QueryProductBySlug_livros {
  __typename: "Livro";
  id: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  description: string;
  image: QueryProductBySlug_livros_image | null;
}

export interface QueryProductBySlug {
  livros: QueryProductBySlug_livros[];
}

export interface QueryProductBySlugVariables {
  slug?: string | null;
}
