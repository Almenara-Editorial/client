/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryCartas
// ====================================================

export interface QueryCartas_cartasDeCristo_books_books_authors {
  __typename: "Author";
  name: string | null;
}

export interface QueryCartas_cartasDeCristo_books_books_image {
  __typename: "UploadFile";
  src: string;
  formats: any | null;
}

export interface QueryCartas_cartasDeCristo_books_books_disccounts {
  __typename: "Disccount";
  minQuantity: number | null;
  percentage: number;
}

export interface QueryCartas_cartasDeCristo_books_books {
  __typename: "Livro";
  id: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  promoPrice: number | null;
  authors: QueryCartas_cartasDeCristo_books_books_authors[];
  image: QueryCartas_cartasDeCristo_books_books_image[];
  disccounts: QueryCartas_cartasDeCristo_books_books_disccounts[];
}

export interface QueryCartas_cartasDeCristo_books {
  __typename: "ComponentCartasBooks";
  books: QueryCartas_cartasDeCristo_books_books[];
}

export interface QueryCartas_cartasDeCristo {
  __typename: "CartasDeCristo";
  quote: string | null;
  books: QueryCartas_cartasDeCristo_books | null;
}

export interface QueryCartas_downloads_file {
  __typename: "UploadFile";
  url: string;
}

export interface QueryCartas_downloads {
  __typename: "Download";
  id: string;
  name: string | null;
  file: QueryCartas_downloads_file[];
}

export interface QueryCartas {
  cartasDeCristo: QueryCartas_cartasDeCristo | null;
  downloads: QueryCartas_downloads[];
}
