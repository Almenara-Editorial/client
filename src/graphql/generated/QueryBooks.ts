/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryBooks
// ====================================================

export interface QueryBooks_livros_image {
  __typename: "UploadFile";
  src: string;
  formats: any | null;
}

export interface QueryBooks_livros {
  __typename: "Livro";
  id: string;
  name: string;
  slug: string;
  price: number;
  image: QueryBooks_livros_image | null;
}

export interface QueryBooks {
  livros: QueryBooks_livros[];
}

export interface QueryBooksVariables {
  limit?: number | null;
}
