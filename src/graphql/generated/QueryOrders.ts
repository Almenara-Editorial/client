/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGESOCIAL_NAME } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryOrders
// ====================================================

export interface QueryOrders_cabecalho_links {
  __typename: "ComponentPageHeaderLink";
  name: string | null;
  url: string | null;
}

export interface QueryOrders_cabecalho {
  __typename: "Cabecalho";
  links: (QueryOrders_cabecalho_links | null)[] | null;
}

export interface QueryOrders_orders_books_book_authors {
  __typename: "Author";
  name: string | null;
}

export interface QueryOrders_orders_books_book_image {
  __typename: "UploadFile";
  src: string;
  formats: any | null;
}

export interface QueryOrders_orders_books_book_disccounts {
  __typename: "Disccount";
  minQuantity: number | null;
  percentage: number;
}

export interface QueryOrders_orders_books_book {
  __typename: "Livro";
  id: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  promoPrice: number | null;
  authors: QueryOrders_orders_books_book_authors[];
  image: QueryOrders_orders_books_book_image[];
  disccounts: QueryOrders_orders_books_book_disccounts[];
}

export interface QueryOrders_orders_books {
  __typename: "ComponentOrderOrderProduct";
  book: QueryOrders_orders_books_book | null;
  price: number | null;
  quantity: number;
}

export interface QueryOrders_orders_status {
  __typename: "OrderStatus";
  name: string | null;
}

export interface QueryOrders_orders_payment {
  __typename: "ComponentOrderPayment";
  total: number | null;
  documentUrl: string | null;
}

export interface QueryOrders_orders {
  __typename: "Order";
  id: string;
  books: (QueryOrders_orders_books | null)[] | null;
  status: QueryOrders_orders_status | null;
  payment: QueryOrders_orders_payment | null;
  created_at: any;
}

export interface QueryOrders_rodape_links_link {
  __typename: "ComponentPageHeaderLink";
  id: string;
  name: string | null;
  url: string | null;
}

export interface QueryOrders_rodape_links {
  __typename: "ComponentPageLinks";
  id: string;
  title: string | null;
  link: (QueryOrders_rodape_links_link | null)[] | null;
}

export interface QueryOrders_rodape_social {
  __typename: "ComponentPageSocial";
  name: ENUM_COMPONENTPAGESOCIAL_NAME;
  url: string;
}

export interface QueryOrders_rodape {
  __typename: "Rodape";
  links: (QueryOrders_rodape_links | null)[] | null;
  social: (QueryOrders_rodape_social | null)[] | null;
}

export interface QueryOrders {
  cabecalho: QueryOrders_cabecalho | null;
  orders: QueryOrders_orders[];
  rodape: QueryOrders_rodape | null;
}

export interface QueryOrdersVariables {
  limit?: number | null;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
}
