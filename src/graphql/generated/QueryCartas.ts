/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGESOCIAL_NAME } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryCartas
// ====================================================

export interface QueryCartas_cabecalho_links {
  __typename: "ComponentPageHeaderLink";
  name: string | null;
  url: string | null;
}

export interface QueryCartas_cabecalho {
  __typename: "Cabecalho";
  links: (QueryCartas_cabecalho_links | null)[] | null;
}

export interface QueryCartas_cartasDeCristo_books_books_authors {
  __typename: "Author";
  name: string | null;
}

export interface QueryCartas_cartasDeCristo_books_books_image {
  __typename: "UploadFile";
  src: string;
  formats: any | null;
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

export interface QueryCartas_rodape_links_link {
  __typename: "ComponentPageHeaderLink";
  id: string;
  name: string | null;
  url: string | null;
}

export interface QueryCartas_rodape_links {
  __typename: "ComponentPageLinks";
  id: string;
  title: string | null;
  link: (QueryCartas_rodape_links_link | null)[] | null;
}

export interface QueryCartas_rodape_social {
  __typename: "ComponentPageSocial";
  name: ENUM_COMPONENTPAGESOCIAL_NAME;
  url: string;
}

export interface QueryCartas_rodape {
  __typename: "Rodape";
  links: (QueryCartas_rodape_links | null)[] | null;
  social: (QueryCartas_rodape_social | null)[] | null;
}

export interface QueryCartas {
  cabecalho: QueryCartas_cabecalho | null;
  cartasDeCristo: QueryCartas_cartasDeCristo | null;
  rodape: QueryCartas_rodape | null;
}
