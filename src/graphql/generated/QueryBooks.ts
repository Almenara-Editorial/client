/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryBooks
// ====================================================

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

export interface QueryBooks_categorias {
  __typename: "Categorias";
  name: string;
  slug: string;
}

export interface QueryBooks {
  recommended: QueryBooks_recommended[];
  livros: QueryBooks_livros[];
  categorias: QueryBooks_categorias[];
}

export interface QueryBooksVariables {
  limit?: number | null;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
  recommended?: any | null;
}
