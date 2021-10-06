/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Book
// ====================================================

export interface Book_authors {
  __typename: "Author";
  name: string | null;
}

export interface Book_image {
  __typename: "UploadFile";
  src: string;
  formats: any | null;
}

export interface Book {
  __typename: "Livro";
  id: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  promoPrice: number | null;
  authors: Book_authors[];
  image: Book_image[];
}
