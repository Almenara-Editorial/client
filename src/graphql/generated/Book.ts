/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Book
// ====================================================

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
  promoPrice: number | null;
  image: Book_image | null;
}
